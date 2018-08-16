export default function getEnvironmentFromUrl () {
    let a = window.location.hostname;
    let prefix = a.includes('localhost')?'local':'prod';
    return prefix;
}