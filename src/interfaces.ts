export interface IFireShow {
    singleFire(): void;
    doubleFire(): void;
}

export interface IWisdomShow {
    calculate(): void;
    dancing(): void;
}

export interface IBalanceShow {
    singlePlankBridge(): void;
    wireWalking(): void;
}

export function hasFireShow(ani: object): ani is IFireShow {
    if ((ani as IFireShow).singleFire && (ani as IFireShow).doubleFire) {
        return true;
    }
    return false;
}

export function hasWisdomShow(ani: object): ani is IWisdomShow {
    if ((ani as IWisdomShow).calculate && (ani as IWisdomShow).dancing) {
        return true;
    }
    return false;
}