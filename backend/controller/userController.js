const Editor = require('../model/userModel');
const io = require('../socket');

exports.getEditorContent = (req,res,next)=>{
    Editor.findById('5f9978c755845f1ef4f58dae')
        .then(result =>{
            res.json({
                editorContent: result
            })
        })
        .catch(err =>{
            console.log(err);
        })
}

exports.updateCode = (req, res, next) => {
    // const editor = new Editor({ content: "testing" });
    // editor.save()
    //     .then(result => {
    //         res.json({
    //             result: "ok"
    //         })
    //     })
    // console.log("inside");
    // console.log(req.body.content);
    // res.json({
    //     result:"ok"
    // })
    Editor.findById('5f9978c755845f1ef4f58dae')
        .then(el =>{
            el.content = req.body.content;
            return el.save();
        })
        .then(result =>{

        })
}