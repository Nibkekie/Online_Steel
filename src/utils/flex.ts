export const productListFlex = {
  type: 'carousel',
  contents: [
    {
      type: 'bubble',
      hero: {
        type: 'image',
        url: 'https://example.com/rb9.jpg', // รูป RB9
        size: 'full',
        aspectRatio: '20:13',
        aspectMode: 'cover'
      },
      body: {
        type: 'box',
        layout: 'vertical',
        spacing: 'sm',
        contents: [
          { type: 'text', text: 'เหล็ก RB9', weight: 'bold', size: 'lg' },
          { type: 'text', text: 'ราคาเริ่มต้น 100 บาท/เส้น', size: 'sm', color: '#555555' }
        ]
      },
      footer: {
        type: 'box',
        layout: 'vertical',
        contents: [
          {
            type: 'button',
            style: 'primary',
            action: { type: 'message', label: 'ดูราคา RB9', text: 'RB9 ราคา' }
          }
        ]
      }
    },
    {
      type: 'bubble',
      hero: {
        type: 'image',
        url: 'https://example.com/rb12.jpg', // รูป RB12
        size: 'full',
        aspectRatio: '20:13',
        aspectMode: 'cover'
      },
      body: {
        type: 'box',
        layout: 'vertical',
        spacing: 'sm',
        contents: [
          { type: 'text', text: 'เหล็ก RB12', weight: 'bold', size: 'lg' },
          { type: 'text', text: 'ราคาเริ่มต้น 150 บาท/เส้น', size: 'sm', color: '#555555' }
        ]
      },
      footer: {
        type: 'box',
        layout: 'vertical',
        contents: [
          {
            type: 'button',
            style: 'primary',
            action: { type: 'message', label: 'ดูราคา RB12', text: 'RB12 ราคา' }
          }
        ]
      }
    },
    {
      type: 'bubble',
      hero: {
        type: 'image',
        url: 'https://example.com/wire.jpg', // รูป ลวดผูกเหล็ก
        size: 'full',
        aspectRatio: '20:13',
        aspectMode: 'cover'
      },
      body: {
        type: 'box',
        layout: 'vertical',
        spacing: 'sm',
        contents: [
          { type: 'text', text: 'ลวดผูกเหล็ก', weight: 'bold', size: 'lg' },
          { type: 'text', text: 'ราคาเริ่มต้น 80 บาท/ม้วน', size: 'sm', color: '#555555' }
        ]
      },
      footer: {
        type: 'box',
        layout: 'vertical',
        contents: [
          {
            type: 'button',
            style: 'primary',
            action: { type: 'message', label: 'ดูราคา ลวดผูกเหล็ก', text: 'ลวดผูกเหล็ก ราคา' }
          }
        ]
      }
    }
  ]
};
