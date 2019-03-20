import React, { Component } from 'react';
import { AditiveSynthesis } from './interactions/aditive';
import { strings } from './strings';
import "./App.css"
import { SubtractiveSynthesis } from './interactions/subtractive';
import { FMSynthesis } from './interactions/fm';
import GithubIC from './assets/github-icon.svg';

class App extends Component<any, any>  {
  private ctx: AudioContext;
  constructor(props) {
    super(props);
    this.state = {
      value: 0
    }

    // this.ctx = new (AudioContext || webkitAudioContext)();
    this.ctx = new AudioContext();
  }
  render() {
    return (
      <div className="page">
        <div style={{ display: 'flex', width: '100%', alignItems: 'center', justifyContent: 'space-between' }} >
          <h2 className="page-title">{strings.title}</h2>
          <a href="https://github.com/ggyshay">
            <img src={GithubIC} alt="github" className="unselectable githubIcon" />
          </a>
        </div>
        <h3 className="subtitle">{strings.soundPhysics.title}</h3>
        <p className="body-text">{strings.soundPhysics.paragraphs[0]}</p>
        <div style={{ display: 'flex', alignItems: 'center', flex: 1 }}>
          {/* <video width="80%" autoPlay loop muted style={{ margin: 'auto' }}> */}
          {/* <source src={require("./assets/room-waves.webm")} type="video/WebM" /> */}
          <img src={require('./assets/roomWaves.gif')} width='100%' />
          {/* <source src={require("./assets/room-waves.mp4")} type="video/mp4" /> */}
          {/* </video> */}
        </div>
        <p className="body-text">{strings.soundPhysics.paragraphs[1]}</p>
        <p className="body-text">{strings.soundPhysics.paragraphs[2]}</p>
        <div style={{ display: 'flex', alignItems: 'center', flex: 1 }}>
          {/* <video width="80%" autoPlay loop muted style={{ margin: 'auto' }}>
            <source src={require("./assets/wave0001-0128.webm")} type="video/WebM" />
          </video> */}
          <img src={require('./assets/wave.gif')} width='100%' />
        </div>
        <p className="body-text">{highlighter(strings.soundPhysics.paragraphs[3])}</p>
        <p className="body-text">{highlighter(strings.soundPhysics.paragraphs[4])}</p>
        <p className="body-text">{highlighter(strings.soundPhysics.paragraphs[5])}</p>
        <p className="body-text">{highlighter(strings.soundPhysics.paragraphs[6])}</p>
        <img src={require('./assets/timbres.png')} width="80%" style={{ margin: "40px 0 " }} />
        <h3 className="subtitle">{strings.spectrum.title}</h3>
        <p className="body-text">{highlighter(strings.spectrum.paragraphs[0])}</p>
        {/* imagem aqui */}
        <p className="body-text">{strings.spectrum.paragraphs[1]}</p>
        <AditiveSynthesis ctx={this.ctx} />

        <h3 className="subtitle">{strings.synthesis.title}</h3>
        <p className="body-text">{strings.synthesis.paragraphs[0]}</p>
        <h3 className="subtitle">{strings.additive.title}</h3>
        <p className="body-text">{strings.additive.paragraphs[0]}</p>

        <h3 className="subtitle">{strings.subtractive.title}</h3>
        <p className="body-text">{strings.subtractive.paragraphs[0]}</p>
        <SubtractiveSynthesis ctx={this.ctx} />

        <h3 className="subtitle">{strings.fm.title}</h3>
        <p className="body-text">{strings.fm.paragraphs[0]}</p>
        <div style={{ display: 'flex', alignItems: 'center', flex: 1 }}>
          {/* <video width="80%" autoPlay loop muted style={{ margin: 'auto' }}>
            <source src={require("./assets/fm.mp4")} type="video/mp4" />
          </video> */}
          <img src={require('./assets/fm.gif')} width='100%' />
        </div>
        <p className="body-text">{strings.fm.paragraphs[1]}</p>
        <div style={{ display: 'flex', alignItems: 'center', flex: 1 }}>
          <img src={require('./assets/fm-schema.png')} width={'80%'} />
        </div>
        <p className="body-text">{strings.fm.paragraphs[2]}</p>

        <FMSynthesis ctx={this.ctx} />
        <h3 className="subtitle">{strings.others.title}</h3>
        <p className="body-text">{strings.others.paragraphs[0]}</p>
        <p className="body-text">{highlighter(strings.others.paragraphs[1])}</p>
        <p className="body-text">{highlighter(strings.others.paragraphs[2])}</p>
        <div style={{ width: 10, height: 50 }} />
        <p className="footer">Duvida ou sugestão? Fale comigo, meu nome é Gabriel: ggyshay@gmail.com</p>
      </div>
    );
  }
}

const highlighter = text => {
  const achoredText = '$' + text + '$';
  const pieces = achoredText.split(/(<strong>)|(<\/strong>)/).filter(piece => piece && !piece.includes('strong>'))
  return <React.Fragment>
    {pieces.map((piece, idx) => {
      const cleanPiece = piece.replace('$', '');
      return idx % 2 === 1 ? <strong key={cleanPiece + idx}>{cleanPiece}</strong> : cleanPiece
    })}
  </React.Fragment>
}

export default App;