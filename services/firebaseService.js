// import admin from "firebase-admin";

const firebaseConfig = {
  apiKey: "AIzaSyBeGczlr27mMg9D_pntgRJdYSAbMfOBxsY",
  authDomain: "password-manager-b4394.firebaseapp.com",
  projectId: "password-manager-b4394",
  storageBucket: "password-manager-b4394.appspot.com",
  messagingSenderId: "560295788162",
  appId: "1:560295788162:web:cbf2293d6dfd5aad61be9b"
};

import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  updateProfile,
} from '@firebase/auth';
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, get, set, serverTimestamp } from 'firebase/database';

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const db = getDatabase();

/*  Login - Register
 ********************************************* */

export const login = async (email, password) => {
  try {
    const { user } = await signInWithEmailAndPassword(auth, email, password);
    if (user.uid) {
      return user;
    }
  } catch (err) {
    throw err;
  }
};

export const createUser = async (email, password, name) => {
  const defaultCategories = {
    facebook: {
      info: {
        icon: 'Facebook',
      },
      items: {
        '-N6dwzTiLPKzIT7gaAMi': {
          category: 'facebook',
          email: 'dddddadsfadsfsdf',
          account_name: 'dsfadsa',
          password: 'asdfasdfadsffffffdddd',
          fav_icon: 'heart-outline',
          key: serverTimestamp(),
        },
      },
    },
    google: {
      info: {
        icon: 'Google',
      },
      items: {
        '-N8nvwDXZms7DpuLjDuu': {
          category: 'google',
          email: 'abc@example.com',
          account_name: 'example Account',
          password: 'examplepassword',
          fav_icon: 'heart-outline',

          key: serverTimestamp(),
        },
      },
    },
    instagram: {
      info: {
        icon: 'Instagram',
      },
      items: {
        '-N6ibRGx4HG9kPyFakvK': {
          category: 'instagram',
          email: 'abc@example.com',
          account_name: 'example Account',
          password: 'examplepassword',
          fav_icon: 'heart',
          key: serverTimestamp(),
        },
      },
    },
  };
  try {
    // checkinng if username in userNameList
    const userNameList = await get(ref(db, 'Users/UsersList/'));

    const checkUserName = userNameList.forEach((item) => {
      if (item.val().username === name) {
        return true;
      } else {
        return false;
      }
    });

    if (checkUserName) {
      return { error: { message: 'Username already exists' } };
    }

    // creatingUser
    let { user } = await createUserWithEmailAndPassword(auth, email, password);
    if (user.uid) {
      // Updating User Data
      await updateProfile(user, { displayName: name });

      // Entering User Data
      await set(ref(db, 'Users/' + name), {
        User_info: {
          username: name,
          email: email,
          password: password,
          uid: user.uid,
        },
        Categories: defaultCategories,
      });

      // Entering UserName to list Of Usernames
      let UserNameList = {};
      UserNameList[user.uid] = { username: name, uid: user.uid };
      await set(ref(db, 'Users/UsersList/'), UserNameList);

      return user;
    }
  } catch (err) {
    throw err;
  }
};

/*   Get User Info
 ********************************************* */
export const getUserInfo = async (username) => {
  const userInfoRef = ref(db, `Users/${username}/User_info`);
  try {
    const userInfo = await get(userInfoRef);
    return userInfo.val();
  } catch (err) {
    throw err;
  }
};

export const getAllCategories = async (username) => {
  try {
    const categoriesRef = ref(db, `Users/${username}/Categories/`);
    const data = await get(categoriesRef);

    let allCategories = [];

    data.forEach((category) => {
      allCategories.push({ category: category.key, value: category.val() });
    });

    return allCategories;
  } catch (err) {
    throw err;
  }
};

export const addCategory = async (username, categoryName, icon) => {
  let newCategoryData = {
    info: {
      icon: icon.toLowerCase(),
    },
    items: {},
  };

  const newCategoryRef = ref(db, `Users/${username}/Categories/${categoryName.toLowerCase()}`);
  try {
    const newCategory = await set(newCategoryRef, newCategoryData);
    return newCategory;
  } catch (err) {
    throw err;
  }
};

// try {
//   //   const data = await login(email, password);
//   //   const data = await createUser(email, password, name);
//   //   const data = await getAllCategories(name);
//   const data = await addCategory(name, 'netFlix', 'heart');
//   console.log(data);
// } catch (err) {
//   console.log(err.message);
//   //   throw err
// }
