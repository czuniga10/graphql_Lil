import { Friends } from './dbConnectors';

//resolver map
export const resolvers = {
    Query: {
        getFriend: ({id}) => {
            return new Friend(id, friendDatabase[id])
        }
    },
    Mutation: {
        createFriend: (root, {input}) => {
            const newFriend = new Friends({
                firstName = input.firstName,
                lastName = input.lastName,
                gender = input.gender,
                age = input.age,
                email = input.email,
            
            });

            newFriend.id = newFriend._id;

            return new Promise((resolve,object) = {
                newFriend.save((err) => {
                    if (err) reject()
                    else resolve(newFriend)
                })
            })
        }
    }
}
