import { prependListener } from "process";

enum Permission {
    Read = 1,
    Write = 2,
    Create = 4,
    Delete = 8
}

// 组合权限

let p:Permission = Permission.Read | Permission.Write;

function hasPermission (target: Permission, per:Permission) {
    return (target & per) === per;
}

console.log(hasPermission(p, Permission.Create))

// 删除权限
/**
 * 0011
 * ^
 * 0010
 * 0001
 */
p = p ^ Permission.Write
console.log(hasPermission(p, Permission.Write))