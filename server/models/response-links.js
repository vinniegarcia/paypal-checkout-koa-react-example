//capture HATEOAS links
export const linkTransform = (links) => links.map(({rel, method, href}) => {
    return {
        rel,
        method,
        href
    };
}).reduce((acc, {rel, method, href}, idx, self) => {
    acc[rel] = {
        href,
        method
    };
    return acc;
}, {});