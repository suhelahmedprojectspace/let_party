import { useState, useEffect } from "react";
import { projectstorage, projectfirestore, timestamp } from "../Firebase/config";

const useStorage = (file) => {
    const [progress, setprogress] = useState(0);
    const [error, seterror] = useState(null);
    const [url, seturl] = useState(null);

    useEffect(() => {
        //refrence
        const storageRef = projectstorage.ref(file.name);
        const collection = projectfirestore.collection('images');

        storageRef.put(file).on('state_changed', (snap) => {
            let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
            setprogress(percentage);

        }, (err) => {
            seterror(err);
        }, async () => {
            const url = await storageRef.getDownloadURL();
            const createdAt = timestamp();
            collection.add({ url, createdAt });
            seturl(url);
        })

    }, [file])

    return { progress, url, error }
}

export default useStorage;
