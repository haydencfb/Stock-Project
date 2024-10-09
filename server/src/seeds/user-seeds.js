import { User } from '../models/index.js';

export const seedUsers = async () => {
    await User.bulkCreate(
        [
            {
                username: 'HaydenFB',
                email: 'hayden@hayden.com',
                password: 'password'
            },
            {
                username: 'JohnM',
                email: 'johnm@johnm.com',
                password: 'password',
            },
            {
                username: 'JohnD',
                email: 'johnd@johnd.com',
                password: 'password',
            },
            {
                username: 'BrianM',
                email: 'brian@brian.com',
                password: 'password',
            },
        ],
        {
            individualHooks: true,
        }
    );
};

export default seedUsers;