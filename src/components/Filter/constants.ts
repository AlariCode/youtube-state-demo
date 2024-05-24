export enum DirectionEnum {
  FRONTEND = "Frontend",
  BACKEND = "Backend",
  DEVOPS = "DevOps",
  MOBILE = "Mobile",
}

export enum TypeEnum {
  COURSE = "course",
  CAREER = "career",
}

export const filterByDirectionVariants = [
  { name: "Frontend", value: DirectionEnum.FRONTEND },
  { name: "Backend", value: DirectionEnum.BACKEND },
  { name: "DevOps", value: DirectionEnum.DEVOPS },
  { name: "Mobile", value: DirectionEnum.MOBILE },
];
export const filterByTypeVariants = [
  { id: 1, name: "Курс", value: TypeEnum.COURSE },
  { id: 2, name: "Карьера", value: TypeEnum.CAREER },
];
