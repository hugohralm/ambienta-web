export class Sort {
    constructor(
        public sorted: boolean,
        public unsorted: boolean,
        public empty: boolean
    ) { }
    static fromJson(json: any): Sort {
        return new Sort(
            json.sorted,
            json.unsorted,
            json.empty
        );
    }
}

export class Pageable {
    constructor(
        public sort: Sort,
        public offset: number,
        public pageNumber: number,
        public pageSize: number,
        public unpaged: boolean,
        public paged: boolean
    ) { }

    static fromJson(json: any): Pageable {
        return new Pageable(
            Sort.fromJson(json.sort),
            json.offset,
            json.pageNumber,
            json.pageSize,
            json.unpaged,
            json.paged
        );
    }
}

export class Page<T> {
    constructor(
        public content: T[],
        public pageable: Pageable,
        public totalElements: number,
        public last: boolean,
        public totalPages: number,
        public size: number,
        public number: number,
        public sort: Sort,
        public numberOfElements: number,
        public first: boolean,
        public empty: boolean
    ) { }

    static fromJson<U>(content: U[], json: any, type: U): Page<U> {
        return new Page<U>(
            content,
            Pageable.fromJson(json.pageable),
            json.totalElements,
            json.last,
            json.totalPages,
            json.size,
            json.number,
            Sort.fromJson(json.sort),
            json.numberOfElements,
            json.first,
            json.empty
        );
    }
}
