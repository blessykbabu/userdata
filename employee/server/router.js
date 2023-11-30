import { Router } from "express";
// import auth from "./middleware/auth.js"


import * as rh from "./request-handler.js";


const router = Router()

router.route("/register").post(rh.register);
// router.route("/login").post(rh.login);
// router.route("/get-all").get(rh.getAll);
// router.route("/get-profile").get(auth,rh.getProfile);
router.route("/emp-list").get(rh.EmpList)

export default router;