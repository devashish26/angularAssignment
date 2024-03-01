let userFlag = false;
let adminFlag = false;

function offUserFlag(){
    userFlag = false;
}
function onnUserFlag(){
    userFlag = true;
    console.log("on flag: "+ userFlag)
}
function offAdminFlag(){
    adminFlag = false;
}
function onnAdminFlag(){
    adminFlag = true;
}

export const myvars = {
    isUserLoggedIn: userFlag,
    isAdminLoggedIn: adminFlag,
    onnUserFlag: onnUserFlag(),
    offUserFlag: offUserFlag(),
    onnAdminFlag: onnAdminFlag(),
    offAdminFlag: offAdminFlag(),
}