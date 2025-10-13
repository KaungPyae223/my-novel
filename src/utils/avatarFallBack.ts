export const avatarFallback = (name: string) => {
    return name.split(" ").map(name => name.charAt(0).toUpperCase()).slice(0, 2).join("");
}