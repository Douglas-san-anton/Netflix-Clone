import React from 'react'
import Styles from './MainBrowse.module.css'
import mrlogo from '../../assets/mrRobotLogo.png'
import mrbg from '../../assets/mrRobotBack.jpg'
import iconInfo from '../../assets/iconInfo.png'

export const MainBrowse = () => {
  return (
    <div className={Styles.hero}>
      <div className={Styles.hero__main}>
        <div className={Styles.hero__title}>
          <img className={Styles.hero__title_img} src={mrlogo} alt="mr robot logo" />
        </div>
        <div className={Styles.hero__description}>
          <p>A contemporary and culturally resonant drama about a young programmer, Elliot, who suffers from a debilitating anti-social disorder and decides that he can only connect to people by hacking them. He wields his skills as a weapon to protect the people that he cares about.</p>
        </div>
      </div>
      <button className={Styles.hero__button_play}>
        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQAAAAEACAYAAABccqhmAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAgY0hSTQAAeiYAAICEAAD6AAAAgOgAAHUwAADqYAAAOpgAABdwnLpRPAAABPBJREFUeJzt2yvLpVUYx+GFMggiCBMFLSImi80yn8Ck0Wa16TdQg3GaH0GT0WSbZNJgNlgEgyCIxePa6Hh4X/fsZz/PutfxuuDf170P8ZcSAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAVPZ63gdmNs1O/+nNns77Mu93Mxt+X+XdTVd6Ju/rDh5vZvv3Td5zaafn877t4Agzu37f5b2YDnop7/sOjjGz7fsh7+VUyCt5P3ZwlJld3k9591Jhr+b93MFxZnZ+v+S9loK8kfdrB0ea2e39lvdmCvZWB4ea2e29kyp5v9JBZrZt76XK7hd6uJkd24epgcfyPt7xWDMrt0/yHk+N3Mn79MIDzSxmn+U9kRp7Mu9Bav9hmK20z/OeSp0QD5nV2664J5p4yCx+h+KeaOIhs7gViXuiiYfMyq9o3BNNPGRWbiFxTzTxkNnxhcY90cRDZvtXJe6JJh4y27dqcU+0U6jQ+sM0G2nvpsmIh8y2rUncE008ZHZ5TeOeaOIhs/PrIu6JJh4yu72u4p5o4iGzf9Zl3BNNPGTWedwTTTxkK2+IuCeaeMhW3FBxTzTxkK20IeOeaOIhW2FDxz3RxEM286aIe6KJh2zWTRP3RBMP2WybLu6JJh6yWTZl3BNNPGQzbOq4J5p4yEbeEnFPNPGQjbil4p5o4iEbaUvGPdHEQzbClo57oomHrOeJeyoQD1mPE/dUJB6ynibuaUA8ZD1M3NOQeMhaTtzTAfGQtZq4pxPiIas9cU9nxENWa+KeDp3ioY9S+x+HzT1xT8fEQxY5cc8AxEMWMXHPQMRDVnLingGJh6zExD0DEw/ZkYl7JiAesj0T90xEPGTXTNwzIfGQbZm4Z2LiIXvUxD0LEA/ZuYl7FiEespsT9yxGPGQPJ+5ZkHjIThP3LEw8tPbEPYiHFp24h7+d4qEvUvsfpdWZuIdbxENrTNzDWeKhuSfu4SLx0JwT97CZeGiuiXu4mnhojol72E08NPbEPRwmHhp34h6KEA+NN3EPRYmHxpm4h+LEQ2NM3EMY8VDfE/cQTjzU58Q9VCMe6mviHqoTD/WxU9zz7IXvCkKIh9pO3ENz4qE2E/fQDfFQ3Yl76I54qM7EPXRLPBQ7cQ/dEw/FTdzDEMRD5SfuYSjioXIT9zAc8VCZiXsYlnjo2MQ9DE88tG/iHqYhHrpu4h6mIx7aNnEP0xIPPXriHqYnHvr/iXtYhnjovxP3sBzx0J8T97Cs1eMhcQ/LWzkeEvdAWjMeEvfAv6wUD4l74IZV4iFxD5wxezwk7oELZo2HxD2w0WzxkLgHrjRLPCTugZ1Gj4fEPXDQqPGQuAcKGS0eEvdAYaPEQ+IeCNJ7PCTugWA9x0PiHqigx3hI3AMV9RQPiXugsl7iIXEPNNI6HhL3QGOt4iFxD3Sidjwk7oHO1IqHxD3Qqeh4SNwDnYuKh8Q9MIjS8ZC4BwZTKh4S98CgjsZD4h4Y3JF46O0G7wUK2xMPiXtgItfEQ+IemMzWeEjcA5O6FA+Je2By5+IhcQ8s4mY8JO6BxTyMh8Q9sKgX/hoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAWX8Az/OiWjLIDKAAAAAASUVORK5CYII=" alt="play" />
        Play</button>
      <button className={Styles.hero__button_info}>
        <img className={Styles.white} src={iconInfo} alt="play" />
        More info
      </button>
      <img className={Styles.hero__poster} src={mrbg} alt="mr robot background" />
      <button className={Styles.hero__button_white}>
        <img src="data:image/png;base64,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" alt="reload" />
      </button>
      <div className={Styles.hero__clasif}>13+</div>
    </div>
  )
}
