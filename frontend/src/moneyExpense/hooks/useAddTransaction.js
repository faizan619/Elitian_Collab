import {addDoc, collection,serverTimestamp} from 'firebase/firestore'
import {db} from '../config/firebase-config'
import {useGetUserInfo} from '../hooks/useGetUserInfo'

export const useAddTransaction = ()=>{

    const transactionCollectionRef = collection(db,'transaction')
    const {userId} = useGetUserInfo();

    const AddTransaction = async ({
        description,
        transactionAmount,
        transactionType,
    })=>{
        await addDoc(transactionCollectionRef,{
            userId,
            description,
            transactionAmount,
            transactionType,
            createdAt:serverTimestamp()
        });
    }

    return {AddTransaction};
}