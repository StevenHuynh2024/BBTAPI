const bbt = require('big-bang-theory');
let check = new Boolean(false);
let array = new Array();

const episodeTitle = (req, res) => {
  check = false;
  array = []
  for(let i = 0; i <279; i++) {
    let epName = bbt._embedded.episodes[i].name
    if(epName.includes(req.params.index)) {
      array.push(bbt._embedded.episodes[i]);
      check = true;
    }   
  } 
  if(check == true){
    res.status(200).json({
      success: true,
      index: req.params.index,
      data: array,
    });
  } else {
    res.status(200).json({
      success: false,
      index: req.params.index,
      message: "Index not in any title"
    })
  }


}

module.exports = episodeTitle;