import { b } from './module_b'


if (window.aImported) {
    throw new Error("a double imported, not allowed!")
}
window.aImported = true;
export function a() {
    return b;
}
