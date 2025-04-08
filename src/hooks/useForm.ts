import { useEffect, useMemo, useState, ChangeEvent } from "react";

type FormValidations<T> = {
  [K in keyof T]?: [(value: T[K]) => boolean, string];
};

type FormValidationState<T> = {
  [K in keyof T as `${string & K}Valid`]?: string | null;
};

export const useForm = <T extends Record<string, any>>(
  initialForm: T,
  formValidations: FormValidations<T> = {}
) => {
  const [formState, setFormState] = useState<T>(initialForm);
  const [formValidation, setFormValidation] = useState<FormValidationState<T>>(
    {}
  );

  useEffect(() => {
    createValidators();
  }, [formState]);

  const isFormValid = useMemo(() => {
    for (const formValue of Object.keys(formValidation)) {
      if (formValidation[formValue as keyof FormValidationState<T>] !== null)
        return false;
    }

    return true;
  }, [formValidation]);

  const onInputChange = ({ target }: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const resetForm = () => {
    setFormState(initialForm);
  };

  const createValidators = () => {
    const formCheckedValues: FormValidationState<T> = {};

    for (const formField of Object.keys(formValidations)) {
      const [fn, errorMessage] = formValidations[formField as keyof T]!;
      (formCheckedValues as Record<string, string | null>)[`${formField}Valid`] = fn(formState[formField as keyof T])
        ? null
        : errorMessage;
    }

    setFormValidation(formCheckedValues);
  };

  return {
    ...formState,
    formState,
    onInputChange,
    resetForm,

    ...formValidation,
    formValidation,
    isFormValid,
  };
};
