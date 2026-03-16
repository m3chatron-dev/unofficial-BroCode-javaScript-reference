
export const PI = 3.14159;

export function getCircumference(radius){
    return 2 * PI * radius;
}

export function getArea(radius){
    return PI * radius ** 2 // vid uses radius * radius but i think 'radius ** 2" looks cleaner
}

export function getVolume(radius){
    return (4/3) * PI * radius ** 3
}