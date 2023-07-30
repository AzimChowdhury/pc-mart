export { default } from "next-auth/middleware"

export const config = { matcher: ["/build", "/build/chooseCpu", "/build/chooseMotherboard", "/build/chooseRam", "/build/chooseSsd", "/build/chooseMonitor", "/build/choosePowerSupply", "/build/chooseKeyboard", "/build/chooseMouse", "/build/chooseCasing",] }