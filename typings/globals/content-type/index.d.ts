// Generated by typings
// Source: https://raw.githubusercontent.com/DefinitelyTyped/DefinitelyTyped/73110d92bdab2367e326f297bef3574285cba329/content-type/content-type.d.ts
declare namespace ContentType {
    interface parseInfo {
        type: string;
        parameters: {
            charset: string;
        }
    }

    interface ContentTypeStatic {
        parse: (req: Express.Request | Express.Response | {}) => parseInfo;
    }
}

declare module "content-type" {
    var x: ContentType.ContentTypeStatic;
    export = x;
}