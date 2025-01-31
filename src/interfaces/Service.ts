export interface ServiceCardProps extends Service {}

export interface Service {
    icon: JSX.Element,
    title: string,
    description: string,
}