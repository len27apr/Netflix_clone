import { useEffect, useState, useContext } from "react";
import { FirebaseContext } from "../context/firebase";

export default function useContent(target) {
  const [content, setContent] = useState([]);
  const { firebase } = useContext(FirebaseContext);
  // console.log('The value of content is: ',content);

  useEffect(() => {
    firebase.firestore().collection(target).get().then((snapshot) => {
      // console.log('the snapshot is: ',snapshot);
      const allContent = snapshot.docs.map((contentobj) => {
        return {
          ...contentobj.data(),
          docId: contentobj.id
        }
      })

      setContent(allContent);
    }).catch((error) => {
      console.log(error.message);
    })
  },[firebase,target])

  return { [target]: content }
}




// useEffect(() => {
//   async function getData()
//   {
//     try {
//       const snapshot = await firebase.firestore().collection(target).get()
//       // console.log('the snapshot is: ',snapshot);
//       const allContent = await snapshot.docs.map((contentobj) => {
//         return {
//           ...contentobj.data(),
//           docId: contentobj.id
//         }
//       })

//       setContent(allContent);
//     }
//     catch (error) {
//       console.log(error.message);
//     }
//   }
//   getData()
// })