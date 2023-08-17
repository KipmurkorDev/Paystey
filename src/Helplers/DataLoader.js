import { error } from "console";
import {fs} from "fs"
export default   async function  getFiles (dir) {
    let files = []
    fs.readdir(dir, (err, files) => {
       try {
        files.forEach(file => {
            const name = `${dir}/${file}`;
            files.push(name);
        });
       } catch (err) {
        console.log(err);
       }

      });
    return files;
}

