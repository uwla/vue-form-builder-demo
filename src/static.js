export const model = {
    name: 'john',
    email: 'john@email.test',
    gender: 'male',
    phone: '+1 999 9999-9999',
    fruits: ['banana', 'avocado'],
    website: 'http://example.test/',
    country: 'Canada',
    agree: true,
    bio: 'Commodo proident incididunt anim reprehenderit amet occaecat in exercitation fugiat minim reprehenderit irure voluptate ad.'
}

export const messages = {
    name: 'god job',
    email: 'awesome',
    gender: 'god job',
    bio: 'awesome',
    fruits: 'god job',
    photo: 'awesome',
    country: 'god job',
    agree: 'awesome',
    website: 'god job',
    amount: 'awesome job',
    birthday: 'god job',
}

export const errors = {
    name: 'Name must be longer.',
    email: 'Email is required.',
    phone: 'Phone is invalid.',
    website: 'Website must be valid URL.',
    amount: 'too much!',
    password: 'Password must contain letters and numbers.',
    bio: 'Bio cannot have more than 100 words.',
    gender: 'Pick a gender',
    photo: [
        'Photo size must be below 2MB.',
        'Photo contains invalid dimensions.',
        'Supported formats are JPG or PNG.'
    ],
    fruits: 'Choose at most 3 fruits',
    country: 'Select a country.',
    agree: 'We cannot procede without agreement.',
}

export const validation = {
    name: (val) => {
        if (val.length < 5) return 'name must be longer'
        if (val.length > 20) return 'name must be smaller'
        return true
    },
    bio: (val) => {
        if (!val.includes('hello'))
            return 'bio must include the world "hello"'
        return true
    },
    fruits: (val) => {
        if (val.length < 2)
            return 'must choose at least 2 items!'
        return true
    },
    agree: (val) => val,
}