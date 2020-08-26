import ItemCollection from './itemCollection';
import ear01 from '../pic/ear-01.jpg'
import ear02 from '../pic/ear-02.jpg'
import ear03 from '../pic/ear-03.jpg'

import mouse01 from '../pic/mouse-01.jpg'
import mouse02 from '../pic/mouse-02.jpg'
import mouse03 from '../pic/mouse-03.jpg'

import keyboard01 from '../pic/keyboard-01.jpg'
import keyboard02 from '../pic/keyboard-02.jpg'
import keyboard03 from '../pic/keyboard-03.jpg'



const goodStore = new ItemCollection([
    {
        id:    0,
        img:   ear01,
        name:  'Нашники 1',
        cost:  Math.floor(500 + Math.random() * (5000 + 1 - 500)),
        count: 1,
        disabled: false
    },
    {
        id:    1,
        img:   ear02,
        name:  'Нашники 2',
        cost:  Math.floor(500 + Math.random() * (5000 + 1 - 500)),
        count: 1,
        disabled: false
    }, {
        id:    2,
        img:   ear03,
        name:  'Нашники 3',
        cost:  Math.floor(500 + Math.random() * (5000 + 1 - 500)),
        count: 1,
        disabled: false
    },
    {
        id:    3,
        img:   mouse01,
        name:  'Мышака 1',
        cost:  Math.floor(500 + Math.random() * (5000 + 1 - 500)),
        count: 1,
        disabled: false
    },
    {
        id:    4,
        img:   mouse02,
        name:  'Мышака 2',
        cost:  Math.floor(500 + Math.random() * (5000 + 1 - 500)),
        count: 1,
        disabled: false
    }, {
        id:    5,
        img:   mouse03,
        name:  'Мышака 3',
        cost:  Math.floor(500 + Math.random() * (5000 + 1 - 500)),
        count: 1,
        disabled: false
    },
    {
        id:    6,
        img:   keyboard01,
        name:  'Клавиатура 1',
        cost:  Math.floor(500 + Math.random() * (5000 + 1 - 500)),
        count: 1,
        disabled: false
    },
    {
        id:    7,
        img:   keyboard02,
        name:  'Клавиатура 2',
        cost:  Math.floor(500 + Math.random() * (5000 + 1 - 500)),
        count: 1,
        disabled: false
    }, {
        id:    8,
        img:   keyboard03,
        name:  'Клавиатура 3',
        cost:  Math.floor(500 + Math.random() * (5000 + 1 - 500)),
        count: 1,
        disabled: false
    }

])
export default goodStore;