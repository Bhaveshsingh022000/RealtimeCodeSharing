const Editor = require('../model/userModel');
const io = require('../socket');

exports.getEditorContent = (req, res, next) => {
    Editor.findById('5f9978c755845f1ef4f58dae')
        .then(result => {
            res.json({
                editorContent: result
            })
        })
        .catch(err => {
            console.log(err);
        })
}

exports.updateCode = (req, res, next) => {
    Editor.findById('5f9978c755845f1ef4f58dae')
        .then(el => {
            el.content = req.body.content;
            return el.save();
        })
        .then(result => {
            // io.getIo().emit('editorContent', { action: 'update', result: result });
            io.getIo().sockets.emit('broadcast',{result: result});
            res.status(201).json({message:"Content Updated", result:result});
        })
        .catch(err =>{
            console.log(err);
        })
}