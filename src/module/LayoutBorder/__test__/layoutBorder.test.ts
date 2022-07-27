import layoutBorder from '..';

describe('module => layoutBorder', () => {
    const index = 0;
    const column = 2;
    const data = [
        {
            title: '',
        },
        {
            title: '',
        },
        {
            title: '',
        },
        {
            title: '',
        },
    ];
    it('test layoutBorder', () => {

        const styleBorder = layoutBorder(({ index, column, data }));
        expect(styleBorder).toStrictEqual({ borderBottomColor: '#edf0f5', borderBottomWidth: 1 });

    });
});