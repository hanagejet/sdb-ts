import * as ShareDB from 'sharedb';
import { SDB } from './sdb';
import { SDBSubDoc } from './sdb-subdoc';
export declare abstract class OpSubmittable {
    submitObjectReplaceOp(p: Array<string | number>, oi: any, od?: any): Promise<this>;
    submitObjectInsertOp(p: Array<string | number>, oi: any): Promise<this>;
    submitObjectDeleteOp(p: Array<string | number>, od?: any): Promise<this>;
    submitListReplaceOp(p: Array<string | number>, li: any, ld?: any): Promise<this>;
    submitListInsertOp(p: Array<string | number>, li: any): Promise<this>;
    submitListDeleteOp(p: Array<string | number>, ld?: any): Promise<this>;
    submitNumberAddOp(p: Array<string | number>, na: number): Promise<this>;
    submitListSpliceOp(p: Array<string | number>, index: number, numToRemove: number, ...toAdd: Array<any>): Promise<this>;
    submitListPushOp(p: Array<string | number>, ...items: Array<any>): Promise<this>;
    submitListUnshiftOp(p: Array<string | number>, ...items: Array<any>): Promise<this>;
    abstract submitOp(ops: Array<ShareDB.Op>, source?: any): Promise<this>;
    abstract traverse(path: Array<string | number>): any;
}
export declare type DocIdentifier = [string, string];
export declare class SDBDoc<E> extends OpSubmittable {
    private docIdentifier;
    private doc;
    private sdb;
    constructor(docIdentifier: DocIdentifier, doc: ShareDB.Doc, sdb: SDB);
    subDoc<T>(path: Array<string | number>): SDBSubDoc<T>;
    getIdentifier(): DocIdentifier;
    getData(): E;
    traverse(path: Array<string | number>): any;
    static relative(from: Array<string | number>, to: Array<string | number>): Array<string | number>;
    fetch(): Promise<ShareDB.Doc>;
    create(data: E, type?: any, options?: any): Promise<this>;
    del(source?: any): Promise<void>;
    subscribe(callback?: (eventType: string, ops: Array<ShareDB.Op>, source: any, data: E) => void): () => void;
    submitOp(ops: Array<ShareDB.Op>, source?: any): Promise<this>;
    createIfEmpty(data: E, type?: any, options?: any): Promise<this>;
    destroy(): void;
}
