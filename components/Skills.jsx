import React from 'react';
import './Skills.css';

function Skills() {
  return (
    <div className="container-fluid  py-4">
      <div className="text-center mb-4">
        <h3 className="cl py-2 px-3 tt d-inline-block">Skills</h3>
      </div>

      <div className="container glass rounded p-2">
        <div className="row">
          {/* Left Column */}
          <div className="col-12 col-md-6 mb-4">
            <div className="d-flex align-items-center mb-3">
              <img src="https://cdn-icons-png.freepik.com/512/1532/1532556.png" alt="HTML 5" width="40" height="42" />
              <h4 className="cl ms-3">HTML 5</h4>
            </div>
            <div className="d-flex align-items-center mb-3">
              <img src="https://cdn3.iconfinder.com/data/icons/social-media-special/256/css3-256.png" alt="CSS3" width="40" height="42" />
              <h4 className="cl ms-3">CSS3</h4>
            </div>
            <div className="d-flex align-items-center mb-3 ">
              <img className='js' src="https://static.vecteezy.com/system/resources/previews/027/127/560/large_2x/javascript-logo-javascript-icon-transparent-free-png.png" alt="JavaScript" width="58" height="60" />
              <h4 className="cl ms-1">JavaScript</h4>
            </div>
            <div className="d-flex align-items-center mb-3">
              <img src="https://ehaboo.github.io/my-resume/assets/images/Bootstrap-img.png" alt="Bootstrap 5" width="40" height="35" />
              <h4 className="cl ms-3">Bootstrap 5</h4>
            </div>
            <div className="d-flex align-items-center">
              <img src="https://res.cloudinary.com/practicaldev/image/fetch/s--qo_Wp38Z--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/e0nl7ziy1la7bpwj7rsp.png" alt="React.js" width="42" height="42" />
              <h4 className="cl ms-3">React.js 18</h4>
            </div>
          </div>

          {/* Right Column */}
          <div className="col-12 col-md-6">
            <div className="d-flex align-items-center mb-3">
              <img src="https://miro.medium.com/v2/resize:fit:374/1*Yhe1R94CIotr2se7Wf6TQQ.png" alt="Node.js" width="47" height="48" />
              <h4 className="cl ms-3">Node.js</h4>
            </div>
            <div className="d-flex align-items-center mb-3">
              <img src="https://www.iconninja.com/files/824/866/459/node-javascript-js-data-icon.png" alt="Express.js" width="53" height="53" />
              <h4 className="cl ms-3">Express.js</h4>
            </div>
            <div className="d-flex align-items-center mb-3">
              <img src="https://external-preview.redd.it/qFg8VEOEmkWHWI7hTfCP1lpKSa2nFa-G122xsHjd3Vc.jpg?auto=webp&s=1c18b8213277a82dbbf4bdc76c33e44e45160f39" alt="MongoDB" width="50" height="44" />
              <h4 className="cl ms-3">MongoDB</h4>
            </div>
            <div className="d-flex align-items-center mb-3">
              <img src="https://creazilla-store.fra1.digitaloceanspaces.com/icons/3253808/git-icon-icon-md.png" alt="Git" width="53" height="47" />
              <h4 className="cl ms-3">Git</h4>
            </div>
            <div className="d-flex align-items-center">
              <img src="https://pngimg.com/uploads/github/github_PNG80.png" alt="GitHub" width="53" height="53" />
              <h4 className="cl ms-3">GitHub</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
