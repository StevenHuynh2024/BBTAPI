const bbt = require('big-bang-theory');
let check = new Boolean(false);
let array = new Array();


const seasons = (req, res) => {
    array = []
    if (req.params.index > 12 || req.params.index < 0) {
        res.status(200).json({
            success: false,
            index: req.params.index,
            message: "There are only 12 seasons",
        })
    }
    for (let i = 0; i < 279; i++) {
        if (bbt._embedded.episodes[i].season == req.params.index) {
            array.push(bbt._embedded.episodes[i]);
            check = true;
        }
    }
    if (check == true) {
        res.status(200).json({
            success: true,
            index: req.params.index,
            data: array,
        })
    } else {
        res.status(200).json({
            success: false,
            index: req.params.index,
            message: "Index out of bound"
        })
    }








}




module.exports = seasons;


