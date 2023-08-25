
export enum SelectedPage{
    Home="home",
    Benefits="benefits",
    ContactUs="contactus",
    OurClasses = "ourclasses"
}

export interface BenefitType{
    icon :JSX.Element;
    title:string;
    description:string

}
export interface ClassType{
    image:string;
    name:string;
    description?:string

}