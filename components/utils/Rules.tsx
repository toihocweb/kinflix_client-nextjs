type RuleType =
    | 'string'
    | 'number'
    | 'boolean'
    | 'method'
    | 'regexp'
    | 'integer'
    | 'float'
    | 'object'
    | 'enum'
    | 'date'
    | 'url'
    | 'hex'
    | 'email';

export const validatorRules = {
    Required: {
        required: true,
        message: '入力必須項目です。',
    },

    Email: {
        type: 'email' as RuleType,
        message: '入力されたメールアドレスに間違いがあります。',
    },

    Checkbox: {
        validator: (_, value) =>
            value ? Promise.resolve() : Promise.reject(''),
    },
};
