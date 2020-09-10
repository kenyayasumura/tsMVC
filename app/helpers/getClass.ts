export function getClass( className:string ) {
    return Function(`return (${className})`)()
}
