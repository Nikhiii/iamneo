import { v4 as uuidv4 } from 'uuid'

const trialData = [
    {
        id: uuidv4(),
        title: ' 📃 To do',
        tasks: [
            {
                id: uuidv4(),
                title: 'Learn JavaScript'
            },
            {
                id: uuidv4(),
                title: 'Learn HTML'
            },
            {
                id: uuidv4(),
                title: 'Learn CSS'
            },
            {
                id: uuidv4(),
                title: 'Learn Bootstrap'
            }
        ]
    },
    {
        id: uuidv4(),
        title: ' ✏️ In progress',
        tasks: [
            {
                id: uuidv4(),
                title: 'Learn Python'
            },
            {
                id: uuidv4(),
                title: 'Learn C++'
            },
            {
                id: uuidv4(),
                title: 'Learn Java'
            }
        ]
    },
    {
        id: uuidv4(),
        title: ' ✔️ Completed',
        tasks: [
            {
                id: uuidv4(),
                title: 'Learn C Programming'
            },
            {
                id: uuidv4(),
                title: 'Learn Angular'
            }
        ]
    }
]

export default trialData