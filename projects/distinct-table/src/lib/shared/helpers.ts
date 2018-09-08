export function getDataFromObject(object, path) {
    let parts = path.split(".");
    if (parts.length == 1) {
        return object[parts[0]];
    }
    return getDataFromObject(object[parts[0]], parts.slice(1).join("."));
}

export interface SortConf {
    field: string;
    direction: string;
    compare?: (direction: any, a: any, b: any) => any;
}

export class LocalSorter {

    protected static COMPARE(direction: any, a: any, b: any) {

        let first = typeof a === 'string' ? a.toLowerCase() : a;
        let second = typeof b === 'string' ? b.toLowerCase() : b;

        if (first < second) {
            return -1 * direction;
        }
        if (first > second) {
            return direction;
        }
        return 0;
    }

    static sort(data: Array<any>, field: string, direction: string, customCompare?: Function): Array<any> {

        const dir: number = (direction === 'asc') ? 1 : -1;
        const compare: Function = customCompare ? customCompare : this.COMPARE;

        return data.sort((a, b) => {
            return compare.call(null, dir, getDataFromObject(a, field), getDataFromObject(b, field));
        });
    }
}