import React, { Component } from 'react';
import { Dropdown } from 'react-bootstrap';

class Navbar extends Component {
  toggleOffcanvas() {
    document.querySelector('.sidebar-offcanvas').classList.toggle('active');
  }
  render () { 
    return (
      <nav className="navbar col-lg-12 col-12 p-lg-0 fixed-top d-flex flex-row">
        <div className="navbar-menu-wrapper d-flex align-items-center justify-content-between">
        <a className="navbar-brand brand-logo-mini align-self-center d-lg-none" href="!#" onClick={evt =>evt.preventDefault()}><img src={require("../../assets/images/logo-mini.svg")} alt="logo" /></a>

          {/* Toggel button for enabling mini sidebar */}
          {/* <button className="navbar-toggler navbar-toggler align-self-center" type="button" onClick={ () => document.body.classList.toggle('sidebar-icon-only') }>
            <i className="mdi mdi-menu"></i>
          </button> */}

          {/* Page title 📃 */}
          <h6 className="text-uppercase mb-0 d-md-block d-lg-block d-none">Roadmap</h6>

          <ul className="navbar-nav navbar-nav-right ml-lg-auto">
            <li className="nav-item  nav-profile border-0">
              <Dropdown alignRight>
                <Dropdown.Toggle className="nav-link count-indicator p-0 toggle-arrow-hide bg-transparent">
                <svg width="21" height="22" viewBox="0 0 21 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M10.4921 1.94437C5.49415 1.94437 1.48498 5.96919 1.50004 10.8896L1.50004 10.8908V10.892C1.49998 12.6036 1.99097 14.2777 2.91239 15.7085C2.96502 15.7817 3.01426 15.8575 3.05993 15.9354L3.06356 15.9416L3.06707 15.9479C3.14102 16.0796 3.2287 16.2572 3.28913 16.4532C3.34443 16.6326 3.40813 16.9251 3.3249 17.2373L3.32446 17.2389L2.54981 20.0939L5.22863 19.1089C5.49496 18.9972 5.78035 18.9402 6.06847 18.9411C6.06895 18.9411 6.06944 18.9411 6.06992 18.9411L6.06706 19.7053L6.06847 18.9411C6.06866 18.9411 6.06828 18.9411 6.06847 18.9411C6.33822 18.9415 6.60562 18.9923 6.85741 19.0909L6.85849 19.0913C7.01053 19.1511 7.61614 19.3804 8.21498 19.5511C8.80368 19.719 9.89081 19.9226 10.6599 19.9226C15.6328 19.9226 19.4999 15.8543 19.5 10.8994C19.4998 10.2847 19.4359 9.67152 19.3095 9.0705L19.3091 9.0689C18.4657 5.01734 14.8473 1.94437 10.4921 1.94437ZM4.63667e-05 10.8931C-0.017057 5.09168 4.69976 0.416016 10.4921 0.416016C15.547 0.416016 19.7836 3.98511 20.7763 8.75066C20.9248 9.45671 20.9998 10.1768 21 10.8988C21 16.6815 16.4774 21.451 10.6599 21.451C9.7133 21.451 8.48481 21.2152 7.8107 21.0229C7.14757 20.8338 6.49306 20.5859 6.31879 20.5173C6.23817 20.4858 6.15257 20.4696 6.06623 20.4695H6.06522L6.06421 20.4695C5.97097 20.4691 5.87862 20.488 5.79276 20.5251L5.77405 20.5331L2.59314 21.7029C2.46108 21.758 2.32192 21.7937 2.17986 21.8089L2.13987 21.8131L2.09965 21.813C1.9409 21.8125 1.78381 21.7799 1.63751 21.7172C1.4912 21.6544 1.35857 21.5626 1.24731 21.4473C1.13605 21.3319 1.04836 21.1951 0.989327 21.045C0.930295 20.8948 0.901089 20.7342 0.903405 20.5725L0.903734 20.5495L0.905417 20.5266C0.913095 20.4221 0.931361 20.3186 0.959916 20.2179L1.85755 16.9096C1.84119 16.8571 1.80994 16.7875 1.76845 16.7129C1.74588 16.6748 1.72151 16.6378 1.69543 16.6021L1.6826 16.5846L1.67079 16.5663C0.581107 14.8825 0.000209936 12.91 4.63667e-05 10.8931Z" fill="#224171"/>
                </svg>
                <span className="count"></span>
                </Dropdown.Toggle>
                <Dropdown.Menu className="navbar-dropdown preview-list">
                  <Dropdown.Item className="dropdown-item  d-flex align-items-center" href="!#" onClick={evt =>evt.preventDefault()}>
                    <p className="mb-0 font-weight-medium float-left">You have 7 unread message </p>
                    <span className="badge badge-pill badge-primary float-right">View all</span>
                  </Dropdown.Item>
                  <div className="dropdown-divider"></div>
                  <Dropdown.Item className="dropdown-item preview-item d-flex align-items-center" href="!#" onClick={evt =>evt.preventDefault()}>
                    <div className="preview-thumbnail">
                      <img src={require("../../assets/images/faces/face10.jpg")} alt="profile" className="img-sm profile-pic" /> </div>
                    <div className="preview-item-content flex-grow py-2">
                      <p className="preview-subject ellipsis font-weight-medium text-dark">Marian Garner </p>
                      <p className="font-weight-light small-text"> The meeting is cancelled </p>
                    </div>
                  </Dropdown.Item>
                  <div className="dropdown-divider"></div>
                  <Dropdown.Item className="dropdown-item preview-item d-flex align-items-center" href="!#" onClick={evt =>evt.preventDefault()}>
                    <div className="preview-thumbnail">
                      <img src={require("../../assets/images/faces/face12.jpg")} alt="profile" className="img-sm profile-pic" /> </div>
                    <div className="preview-item-content flex-grow py-2">
                      <p className="preview-subject ellipsis font-weight-medium text-dark">David Grey </p>
                      <p className="font-weight-light small-text"> The meeting is cancelled </p>
                    </div>
                  </Dropdown.Item>
                  <div className="dropdown-divider"></div>
                  <Dropdown.Item className="dropdown-item preview-item d-flex align-items-center" href="!#" onClick={evt =>evt.preventDefault()}>
                    <div className="preview-thumbnail">
                      <img src={require("../../assets/images/faces/face1.jpg")} alt="profile" className="img-sm profile-pic" /> </div>
                    <div className="preview-item-content flex-grow py-2">
                      <p className="preview-subject ellipsis font-weight-medium text-dark">Travis Jenkins </p>
                      <p className="font-weight-light small-text"> The meeting is cancelled </p>
                    </div>
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </li>

            <li className="nav-item  nav-profile border-0">
              <Dropdown alignRight>
                <Dropdown.Toggle className="nav-link count-indicator p-0 toggle-arrow-hide bg-transparent">
                  <svg width="20" height="24" viewBox="0 0 20 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M7.32199 2.88975C7.68024 1.65593 8.7309 0.397095 10.2872 0.397095C11.8438 0.397095 12.8935 1.65598 13.2544 2.88748C13.2562 2.88978 13.2587 2.89267 13.2618 2.896C13.2692 2.90392 13.2776 2.9112 13.2855 2.91684C13.2915 2.92113 13.2952 2.92298 13.2956 2.9232C14.2015 3.30571 15.2678 3.9167 16.1018 5.03536C16.9425 6.16301 17.4894 7.72841 17.4894 9.91238C17.4894 12.0899 17.7134 13.284 18.0433 14.1037C18.3326 14.8224 18.7129 15.2949 19.2542 15.9672C19.3332 16.0654 19.4157 16.1678 19.5018 16.2759L19.502 16.2762C20.4996 17.5292 19.5576 19.289 18.021 19.289H2.55833C1.02456 19.289 0.0667373 17.5381 1.07252 16.2759C1.15872 16.1677 1.24126 16.0652 1.32036 15.9669C1.86153 15.2948 2.24194 14.8223 2.53145 14.1035C2.86165 13.2837 3.08621 12.0896 3.08747 9.91238M7.32199 2.88975C7.32061 2.89143 7.31888 2.89342 7.31676 2.89567C7.30995 2.90292 7.30189 2.90992 7.29385 2.9156C7.28638 2.92087 7.2819 2.92292 7.2819 2.92294L7.28142 2.92314C6.3751 3.30588 5.30843 3.91572 4.47437 5.0341C3.63373 6.16132 3.08755 7.72649 3.08747 9.9119M10.2872 2.03987C9.67051 2.03987 9.08156 2.56722 8.85365 3.37133L8.85307 3.37338C8.70611 3.88688 8.29921 4.27014 7.8914 4.44216C7.89134 4.44219 7.89128 4.44221 7.89122 4.44224C7.12607 4.76538 6.34384 5.23155 5.74684 6.03207C5.15643 6.82374 4.68941 8.02035 4.68941 9.91238V9.91285C4.68813 12.1837 4.45765 13.6243 4.01206 14.7306C3.62441 15.6931 3.08327 16.3619 2.54636 17.0255C2.46834 17.1219 2.3904 17.2182 2.31304 17.3153L2.31299 17.3154C2.28111 17.3554 2.27219 17.3882 2.27001 17.4129C2.26754 17.4409 2.27267 17.4743 2.28982 17.5088C2.31959 17.5686 2.3937 17.6463 2.55833 17.6463H18.021C18.1797 17.6463 18.2526 17.5712 18.283 17.5098C18.3155 17.4439 18.3115 17.3785 18.2613 17.3153C18.184 17.2183 18.1061 17.122 18.0281 17.0256C17.4912 16.362 16.9499 15.6931 16.5625 14.7304C16.1172 13.624 15.8875 12.1832 15.8875 9.91238C15.8875 8.02276 15.4201 6.82573 14.8292 6.03313C14.2316 5.23162 13.4491 4.76455 12.6855 4.44219C12.2731 4.26826 11.8706 3.87963 11.7245 3.37469L11.7239 3.3726C11.493 2.56683 10.9039 2.03987 10.2872 2.03987Z" fill="#224171"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M7.14845 17.4725C7.58168 17.4725 7.93289 17.8443 7.93289 18.3029V19.1334C7.93289 19.7941 8.18082 20.4277 8.62215 20.8949C9.06348 21.3621 9.66206 21.6246 10.2862 21.6246C10.9103 21.6246 11.5089 21.3621 11.9502 20.8949C12.3916 20.4277 12.6395 19.7941 12.6395 19.1334V18.3029C12.6395 17.8443 12.9907 17.4725 13.4239 17.4725C13.8572 17.4725 14.2084 17.8443 14.2084 18.3029V19.1334C14.2084 20.2346 13.7951 21.2907 13.0596 22.0693C12.324 22.848 11.3264 23.2854 10.2862 23.2854C9.24597 23.2854 8.24834 22.848 7.51279 22.0693C6.77724 21.2907 6.36401 20.2346 6.36401 19.1334V18.3029C6.36401 17.8443 6.71522 17.4725 7.14845 17.4725Z" fill="#224171"/>
                  </svg>
                  <span className="count"></span>
                </Dropdown.Toggle>
                <Dropdown.Menu className="navbar-dropdown preview-list">
                  <Dropdown.Item className="dropdown-item py-3 d-flex align-items-center" href="!#" onClick={evt =>evt.preventDefault()}>
                    <p className="mb-0 font-weight-medium float-left">You have 4 new notifications </p>
                    <span className="badge badge-pill badge-primary float-right">View all</span>
                  </Dropdown.Item>
                  <div className="dropdown-divider"></div>
                  <Dropdown.Item className="dropdown-item preview-item d-flex align-items-center" href="!#" onClick={evt =>evt.preventDefault()}>
                    <div className="preview-thumbnail">
                      <i className="mdi mdi-alert m-auto text-primary"></i>
                    </div>
                    <div className="preview-item-content py-2">
                      <h6 className="preview-subject font-weight-normal text-dark mb-1">Application Error</h6>
                      <p className="font-weight-light small-text mb-0"> Just now </p>
                    </div>
                  </Dropdown.Item>
                  <div className="dropdown-divider"></div>
                  <Dropdown.Item className="dropdown-item preview-item d-flex align-items-center" href="!#" onClick={evt =>evt.preventDefault()}>
                    <div className="preview-thumbnail">
                      <i className="mdi mdi-settings m-auto text-primary"></i>
                    </div>
                    <div className="preview-item-content py-2">
                      <h6 className="preview-subject font-weight-normal text-dark mb-1">Settings</h6>
                      <p className="font-weight-light small-text mb-0"> Private message </p>
                    </div>
                  </Dropdown.Item>
                  <div className="dropdown-divider"></div>
                  <Dropdown.Item className="dropdown-item preview-item d-flex align-items-center" href="!#" onClick={evt =>evt.preventDefault()}>
                    <div className="preview-thumbnail">
                      <i className="mdi mdi-airballoon m-auto text-primary"></i>
                    </div>
                    <div className="preview-item-content py-2">
                      <h6 className="preview-subject font-weight-normal text-dark mb-1">New user registration</h6>
                      <p className="font-weight-light small-text mb-0"> 2 days ago </p>
                    </div>
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </li>

            <li className="nav-item  nav-profile border-0">
                <button className="btn bg-transparent nav-link">
                <svg width="22" height="24" viewBox="0 0 22 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8.71173 2.29516C8.29128 4.03226 8.23411 5.83319 8.54356 7.592C8.85301 9.3508 9.52285 11.032 10.5137 12.5365C11.5045 14.0411 12.7962 15.3388 14.3129 16.3531C15.8297 17.3674 17.5407 18.078 19.3454 18.443C18.3966 19.393 17.2602 20.1488 16.0037 20.6657C14.7473 21.1825 13.3963 21.4498 12.031 21.4517C11.9044 21.4517 11.776 21.4561 11.6476 21.4517C9.27063 21.3707 6.99811 20.4864 5.22483 18.9526C3.45155 17.4187 2.28957 15.3322 1.94076 13.0555C1.59195 10.7788 2.07835 8.45581 3.31546 6.49007C4.55258 4.52433 6.46223 3.04007 8.71265 2.29516H8.71173ZM10.0673 0.152649C10.0135 0.152825 9.95977 0.157576 9.9068 0.16685C6.9871 0.669658 4.36283 2.19991 2.53925 4.46299C0.715683 6.72606 -0.17826 9.56195 0.0295412 12.4247C0.237342 15.2874 1.5322 17.9745 3.6648 19.9686C5.7974 21.9628 8.61697 23.123 11.5806 23.2259C11.7311 23.2312 11.8815 23.2259 12.0301 23.2259C13.9551 23.2271 15.8522 22.7797 17.5609 21.9216C19.2695 21.0634 20.7395 19.8197 21.8465 18.2956C21.9362 18.1643 21.9886 18.0124 21.9983 17.8552C22.0081 17.6981 21.9749 17.5412 21.9021 17.4004C21.8293 17.2596 21.7195 17.1398 21.5836 17.0532C21.4478 16.9665 21.2908 16.9159 21.1284 16.9066C19.2961 16.751 17.5254 16.1898 15.953 15.2663C14.3806 14.3429 13.0487 13.0819 12.0602 11.5809C11.0718 10.0799 10.4532 8.37902 10.2524 6.60979C10.0515 4.84055 10.2738 3.05031 10.9019 1.37745C10.9554 1.24355 10.975 1.09923 10.9591 0.956509C10.9432 0.813793 10.8923 0.676814 10.8107 0.556982C10.729 0.43715 10.619 0.337935 10.4897 0.267604C10.3603 0.197272 10.2155 0.157859 10.0673 0.152649Z" fill="#224171"/>
                </svg>
              </button>
            </li>

            <li className="nav-item  nav-profile border-0">
                <button className="btn bg-transparent nav-link">
                <svg className="spin" width="22" height="24" viewBox="0 0 22 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19.9161 12.4301V11.8089V11.1794L21.4564 9.80613C21.7404 9.55113 21.9267 9.20207 21.9825 8.82063C22.0383 8.43919 21.9599 8.04993 21.7613 7.72166L19.8679 4.4519C19.7272 4.20361 19.5249 3.99739 19.2813 3.85391C19.0377 3.71043 18.7614 3.63475 18.48 3.63446C18.3056 3.6331 18.1322 3.66071 17.9665 3.7162L16.017 4.3865C15.6804 4.15861 15.3293 3.95379 14.9661 3.77342L14.5569 1.71347C14.4835 1.33713 14.2826 0.999064 13.9893 0.75846C13.6959 0.517856 13.3289 0.390043 12.9524 0.397395H9.19775C8.82125 0.390043 8.4542 0.517856 8.16086 0.75846C7.86752 0.999064 7.66658 1.33713 7.59322 1.71347L7.18406 3.77342C6.81817 3.95375 6.4644 4.15856 6.12506 4.3865L4.21567 3.68351C4.04823 3.63906 3.87484 3.62249 3.70221 3.63446C3.42084 3.63475 3.14449 3.71043 2.90088 3.85391C2.65727 3.99739 2.45498 4.20361 2.31429 4.4519L0.420936 7.72166C0.233677 8.04944 0.164092 8.43337 0.224099 8.80768C0.284107 9.18199 0.469974 9.5234 0.749866 9.77344L2.26615 11.1876V12.4383L0.749866 13.8116C0.462068 14.0634 0.271117 14.4109 0.210901 14.7925C0.150686 15.1741 0.225099 15.5651 0.420936 15.8961L2.31429 19.1658C2.45498 19.4141 2.65727 19.6203 2.90088 19.7638C3.14449 19.9073 3.42084 19.983 3.70221 19.9833C3.87659 19.9846 4.05001 19.957 4.21567 19.9015L6.16518 19.2312C6.50176 19.4591 6.85286 19.6639 7.21615 19.8443L7.62531 21.9043C7.69867 22.2806 7.89961 22.6187 8.19295 22.8593C8.48629 23.0999 8.85334 23.2277 9.22984 23.2203H13.0165C13.3931 23.2277 13.7601 23.0999 14.0534 22.8593C14.3468 22.6187 14.5477 22.2806 14.6211 21.9043L15.0302 19.8443C15.3961 19.664 15.7499 19.4592 16.0892 19.2312L18.0307 19.9015C18.1964 19.957 18.3698 19.9846 18.5442 19.9833C18.8256 19.983 19.1019 19.9073 19.3455 19.7638C19.5891 19.6203 19.7914 19.4141 19.9321 19.1658L21.7613 15.8961C21.9485 15.5683 22.0181 15.1844 21.9581 14.81C21.8981 14.4357 21.7122 14.0943 21.4323 13.8443L19.9161 12.4301ZM18.48 18.3484L15.7282 17.4002C15.084 17.9561 14.3478 18.3907 13.5541 18.6835L12.9845 21.6181H9.19775L8.62814 18.7162C7.84065 18.4151 7.10842 17.9812 6.46202 17.4328L3.70221 18.3484L1.80886 15.0786L3.99103 13.1168C3.84269 12.2706 3.84269 11.4043 3.99103 10.5582L1.80886 8.5391L3.70221 5.26934L6.45399 6.21757C7.09816 5.66162 7.83438 5.22704 8.62814 4.93419L9.19775 1.99958H12.9845L13.5541 4.90149C14.3416 5.20265 15.0738 5.63649 15.7202 6.18487L18.48 5.26934L20.3733 8.5391L18.1912 10.501C18.3395 11.3471 18.3395 12.2134 18.1912 13.0595L20.3733 15.0786L18.48 18.3484Z" fill="#224171"/>
                 <path d="M11.0911 16.7135C10.1391 16.7135 9.2084 16.4258 8.4168 15.8869C7.6252 15.348 7.00822 14.582 6.64389 13.6857C6.27955 12.7895 6.18423 11.8034 6.36996 10.852C6.5557 9.90056 7.01415 9.02664 7.68736 8.34071C8.36056 7.65479 9.21827 7.18767 10.152 6.99842C11.0858 6.80917 12.0537 6.9063 12.9332 7.27752C13.8128 7.64874 14.5646 8.27738 15.0935 9.08395C15.6225 9.89051 15.9048 10.8388 15.9048 11.8088C15.9112 12.4547 15.7911 13.0955 15.5515 13.6935C15.3118 14.2915 14.9575 14.8348 14.5092 15.2915C14.061 15.7483 13.5277 16.1093 12.9408 16.3535C12.3539 16.5976 11.7251 16.72 11.0911 16.7135ZM11.0911 8.53906C10.667 8.52899 10.2453 8.60669 9.85146 8.76744C9.45765 8.9282 9.09993 9.16868 8.79995 9.47433C8.49996 9.77999 8.26394 10.1445 8.10617 10.5457C7.94839 10.947 7.87214 11.3767 7.88202 11.8088C7.87214 12.241 7.94839 12.6707 8.10617 13.0719C8.26394 13.4732 8.49996 13.8377 8.79995 14.1433C9.09993 14.449 9.45765 14.6894 9.85146 14.8502C10.2453 15.011 10.667 15.0886 11.0911 15.0786C11.5153 15.0886 11.937 15.011 12.3308 14.8502C12.7246 14.6894 13.0823 14.449 13.3823 14.1433C13.6823 13.8377 13.9183 13.4732 14.0761 13.0719C14.2339 12.6707 14.3101 12.241 14.3002 11.8088C14.3101 11.3767 14.2339 10.947 14.0761 10.5457C13.9183 10.1445 13.6823 9.77999 13.3823 9.47433C13.0823 9.16868 12.7246 8.9282 12.3308 8.76744C11.937 8.60669 11.5153 8.52899 11.0911 8.53906Z" fill="#224171"/>
                </svg>
              </button>
            </li>

            <li className="nav-item nav-profile border-0 d-none d-md-block d-lg-block">
              <Dropdown alignRight className="hvr-sink">
                <Dropdown.Toggle className="nav-link text-left bg-transparent d-flex align-items-center ">
                  <div className="thumb">
                    <img src={require("../../assets/images/faces/face8.jpg")} alt="Profile" />
                  </div>
                  <div className="info">
                    <h6 className="profile-text">Richard V.Welsh</h6>
                    <span className="d-block text-muted">Project Manager</span>
                  </div>
                </Dropdown.Toggle>
                <Dropdown.Menu className="preview-list navbar-dropdown pb-3">
                  <Dropdown.Item className="dropdown-item p-0 preview-item d-flex align-items-center border-bottom" href="!#" onClick={evt =>evt.preventDefault()}>
                    <div className="d-flex">
                      <div className="py-3 px-4 d-flex align-items-center justify-content-center">
                        <i className="mdi mdi-bookmark-plus-outline mr-0"></i>
                      </div>
                      <div className="py-3 px-4 d-flex align-items-center justify-content-center border-left border-right">
                        <i className="mdi mdi-account-outline mr-0"></i>
                      </div>
                      <div className="py-3 px-4 d-flex align-items-center justify-content-center">
                        <i className="mdi mdi-alarm-check mr-0"></i>
                      </div>
                    </div>
                  </Dropdown.Item>
                  <Dropdown.Item className="dropdown-item preview-item d-flex align-items-center border-0 mt-2" onClick={evt =>evt.preventDefault()}>
                    Manage Accounts
                  </Dropdown.Item>
                  <Dropdown.Item className="dropdown-item preview-item d-flex align-items-center border-0" onClick={evt =>evt.preventDefault()}>
                   Change Password 
                  </Dropdown.Item>
                  <Dropdown.Item className="dropdown-item preview-item d-flex align-items-center border-0" onClick={evt =>evt.preventDefault()}>
                    Check Inbox
                  </Dropdown.Item>
                  <Dropdown.Item className="dropdown-item preview-item d-flex align-items-center border-0" onClick={evt =>evt.preventDefault()}>
                    Sign Out
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </li>
          </ul>
          <button className="navbar-toggler navbar-toggler-right d-lg-none align-self-center" type="button" onClick={this.toggleOffcanvas}>
            <span className="mdi mdi-menu"></span>
          </button>
        </div>
      </nav>
    );
  }
}

export default Navbar;
