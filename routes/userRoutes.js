const express = require("express");

const protect = require("../middleware/authMiddleware");
const requireRole = require("../middleware/roleMiddleware");

const router = express.Router();

router.get("/profile", protect, (req, res) => {
    res.status(200).json({
        success: true,
        message: "Protected profile accessed successfully",
        user: req.user
    });
});

router.get(
    "/admin",
    protect,
    requireRole("admin"),
    (req, res) => {
        res.status(200).json({
            success: true,
            message: "Admin resource accessed successfully",
            user: req.user
        });
    }
);

module.exports = router;