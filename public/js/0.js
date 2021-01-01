(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./resources/js/Pages/Homepage/Index.js":
/*!**********************************************!*\
  !*** ./resources/js/Pages/Homepage/Index.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Shared_SearchBar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Shared/SearchBar */ "./resources/js/Shared/SearchBar.js");
/* harmony import */ var _data_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./data.js */ "./resources/js/Pages/Homepage/data.js");
/* harmony import */ var _Shared_CardWrapper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Shared/CardWrapper */ "./resources/js/Shared/CardWrapper.js");
/* harmony import */ var _Shared_Layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Shared/Layout */ "./resources/js/Shared/Layout.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }







function Testimony() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "justify-between hidden lg:flex"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "flex flex-col items-center w-3/12"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
    className: "w-10 h-10 mb-2 stroke-current text-blue-500",
    fill: "none",
    stroke: "currentColor",
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2",
    d: "M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "text-center leading-tight text-sm"
  }, "Tak perlu login, Cukup gunakan fitur pencarian dibawah ini")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "flex flex-col items-center w-3/12"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
    className: "w-10 h-10 mb-2 stroke-current text-blue-500",
    fill: "none",
    stroke: "currentColor",
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2",
    d: "M15 12a3 3 0 11-6 0 3 3 0 016 0z"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2",
    d: "M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "text-center leading-tight text-sm"
  }, "Pengampu bisa melihat dan mengkondisikan jumlah tugas mahasiswa")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "flex flex-col items-center w-3/12"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
    className: "w-10 h-10 mb-2 stroke-current text-blue-500",
    fill: "none",
    stroke: "currentColor",
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2",
    d: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "text-center leading-tight text-sm"
  }, "Dibuat dan dipelihara oleh, dari, dan untuk Mahasiswa")));
}

function EmptyMessage() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "items-center justify-center flex"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
    className: "w-16 h-16 stroke-current text-blue-500 mr-4",
    fill: "none",
    stroke: "currentColor",
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2",
    d: "M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "text-center leading-tight text-gray-700"
  }, "Data tidak ditemukan (hooray?), silahkan lihat panduan mengapa data tidak ditemukan"));
}

function Homepage() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]),
      _useState2 = _slicedToArray(_useState, 2),
      tasks = _useState2[0],
      setTasks = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]),
      _useState4 = _slicedToArray(_useState3, 2),
      filtered = _useState4[0],
      setFiltered = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState6 = _slicedToArray(_useState5, 2),
      isLoaded = _useState6[0],
      setIsLoaded = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(''),
      _useState8 = _slicedToArray(_useState7, 2),
      searchValue = _useState8[0],
      setSearchValue = _useState8[1];

  var _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('all'),
      _useState10 = _slicedToArray(_useState9, 2),
      groupValue = _useState10[0],
      setGroupValue = _useState10[1];

  var _useState11 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(function () {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Testimony, null);
  }),
      _useState12 = _slicedToArray(_useState11, 2),
      noDataFoundComponent = _useState12[0],
      setNoDataFoundComponent = _useState12[1];

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    // calls API here
    setTasks(_data_js__WEBPACK_IMPORTED_MODULE_2__["default"]);
    setIsLoaded(true);
  }, []);

  function handleSearchChange(value) {
    setSearchValue(value);
  }

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    var filteredTasks = [];

    if (searchValue) {
      filteredTasks = tasks.filter(function (task) {
        var regex = new RegExp(searchValue, 'gi');
        return task.abbrev.match(regex) || task.subject.match(regex);
      });
      setNoDataFoundComponent( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(EmptyMessage, null));
    } else {
      setNoDataFoundComponent( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Testimony, null));
    }

    if (groupValue !== 'all') {
      filteredTasks = filteredTasks.filter(function (task) {
        if (task.group) {
          return task.group.toLowerCase() === groupValue;
        }

        return false;
      });
    }

    setFiltered(filteredTasks);
  }, [searchValue, groupValue]);

  function handleGroupChange(value) {
    setGroupValue(value);
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Shared_Layout__WEBPACK_IMPORTED_MODULE_4__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "max-w-4xl"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "w-full py-4 px-4 flex flex-col items-center lg:mb-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    className: "font-bold text-4xl leading-tight mb-2 text-center"
  }, "Temukan tugasmu dengan Mudah."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "text-gray-700 text-base text-center"
  }, "kami para kontributor menyatukan semua tugas Teknik Informatika yang terpencar dari beberapa website pembelajaran Universitas Islam Negeri Sunan Kalijaga.")), isLoaded ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "py-4 px-4 mx-auto"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Shared_SearchBar__WEBPACK_IMPORTED_MODULE_1__["default"], {
    searchBarOnChange: handleSearchChange,
    selectedGroup: groupValue,
    groupOnChange: handleGroupChange
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "px-4 lg:pt-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Shared_CardWrapper__WEBPACK_IMPORTED_MODULE_3__["default"], {
    cards: filtered,
    emptyComponent: noDataFoundComponent
  }))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "flex items-center justify-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
    className: "w-6 h-6 animate-spin mr-2 stroke-current text-gray-500",
    fill: "none",
    stroke: "currentColor",
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2",
    d: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "font-medium text-gray-500"
  }, "Memuat tugas..."))));
}

/* harmony default export */ __webpack_exports__["default"] = (Homepage);

/***/ }),

/***/ "./resources/js/Pages/Homepage/data.js":
/*!*********************************************!*\
  !*** ./resources/js/Pages/Homepage/data.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// TEMPORARY DATA FOR FRONTEND ONLY
// attachment type= [video, document, url]
var DATA = [{
  id: 1,
  subject: "Sistem Informasi dan Manajemen",
  abbrev: "SIM",
  src: "https://learning.uin-suka.ac.id",
  deadline: "12 June 2020, 23:00",
  group: "A",
  details: [{
    id: 1,
    text: "download soal berikut ini",
    attachment: {
      name: "Tugas_12_Juni.pdf",
      type: "document"
    }
  }, {
    id: 2,
    text: "kumpulkan dengan format [NIM].pdf"
  }, {
    id: 3,
    text: "Kumpulkan via Email yang sudah tercantum di grup Whatsapp"
  }]
}, {
  id: 2,
  subject: "Manajemen Risiko",
  abbrev: "Manris",
  src: "https://learning.uin-suka.ac.id",
  deadline: "13 June 2020, 23:59",
  details: [{
    id: 1,
    text: "UTS, silahkan unduh soal dibawah ini:",
    attachment: {
      name: "SOAL_UTS_GASAL_2020-2021(Manajemen_Risiko).pdf",
      type: "document"
    }
  }, {
    id: 2,
    text: "perhatikan pengerjaan soal dan perhatikan batas waktu pengumpulan"
  }]
}, {
  id: 3,
  subject: "Pemograman Berorientasi Objek",
  abbrev: "PBO",
  src: "https://classroom.google.com/",
  deadline: "11 June 2020, 23:59",
  group: "A",
  details: [{
    id: 1,
    text: "Praktikum perdana, download materi disini:",
    attachment: {
      name: "modul_praktikum-3.doc",
      type: "document"
    }
  }, {
    id: 2,
    text: "Silahkan dipelajari secara mandiri dan kerjakan tugasnya"
  }]
}, {
  id: 4,
  subject: "Pemograman Berorientasi Objek",
  abbrev: "PBO",
  src: "https://classroom.google.com/",
  deadline: "21 June 2020, 13:59",
  group: "B",
  details: [{
    id: 1,
    text: "Praktikum-2, membahas inheritance:",
    attachment: {
      name: "modul_praktikum-4.doc",
      type: "document"
    }
  }, {
    id: 2,
    text: "Silahkan dipelajari secara mandiri dan kerjakan tugasnya"
  }, {
    id: 3,
    text: "Pengumpulan tugas disatukan dan dikirim oleh ketua kelas."
  }]
}, {
  id: 5,
  subject: "Kecerdasan Buatan",
  abbrev: "KB",
  src: "https://learning.uin-suka.ac.id",
  deadline: "29 June 2020, 11:00",
  details: [{
    id: 1,
    text: "Materi kali ini membahas Uncertainty",
    attachment: {
      name: "uncertainty",
      type: "video"
    }
  }, {
    id: 2,
    text: "kerjakan tugasnya dari A-B"
  }]
}];
/* harmony default export */ __webpack_exports__["default"] = (DATA);

/***/ }),

/***/ "./resources/js/Shared/Card.js":
/*!*************************************!*\
  !*** ./resources/js/Shared/Card.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);


var documentIcon = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
  className: "w-4 h-4 mr-4 stroke-current text-blue-500",
  fill: "none",
  stroke: "currentColor",
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeWidth: "2",
  d: "M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"
}));
var videoIcon = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
  className: "w-4 h-4 mr-4 stroke-current text-blue-500",
  fill: "none",
  stroke: "currentColor",
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeWidth: "2",
  d: "M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeWidth: "2",
  d: "M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
}));
var urlIcon = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
  className: "w-4 h-4 mr-4 stroke-current text-blue-500",
  fill: "none",
  stroke: "currentColor",
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeWidth: "2",
  d: "M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
}));

function Details(props) {
  var details = props.data;
  var listDetails = details.map(function (detail) {
    var attachment = detail.attachment;
    var attachmentBox;

    if (attachment) {
      var attachmentIcon;

      if (attachment.type === "document") {
        attachmentIcon = documentIcon;
      } else if (attachment.type === "video") {
        attachmentIcon = videoIcon;
      } else {
        attachmentIcon = urlIcon;
      }

      attachmentBox = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "flex bg-gray-100 p-2 rounded-md mt-2 items-center"
      }, attachmentIcon, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "text-sm font-medium"
      }, detail.attachment.name));
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      key: detail.id.toString(),
      className: "p-4 border-t"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, detail.text), attachmentBox);
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "mt-4"
  }, listDetails);
}

Details.propTypes = {
  data: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object)
};

function Card(_ref) {
  var abbrev = _ref.abbrev,
      deadline = _ref.deadline,
      details = _ref.details,
      group = _ref.group,
      src = _ref.src,
      subject = _ref.subject;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "bg-white border w-full rounded-lg mb-6 shadow-lg"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "px-4 py-2 rounded-t-lg mb-4 bg-green-500"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "text-white font-semibold"
  }, deadline)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "flex items-center justify-between"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "px-4 flex items-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    className: "text-4xl font-extrabold mr-2 leading-none"
  }, abbrev), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "flex flex-col"
  }, group === undefined || /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "text-sm text-gray-400"
  }, "kelas ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, group)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "text-sm text-gray-400"
  }, "(", subject, ")"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: src,
    className: "pr-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
    className: "w-6 h-6 stroke-current text-blue-500",
    fill: "none",
    stroke: "currentColor",
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2",
    d: "M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Details, {
    data: details
  }));
}

Card.propTypes = {
  abbrev: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  deadline: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  group: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  src: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  subject: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
};
/* harmony default export */ __webpack_exports__["default"] = (Card);

/***/ }),

/***/ "./resources/js/Shared/CardWrapper.js":
/*!********************************************!*\
  !*** ./resources/js/Shared/CardWrapper.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Card */ "./resources/js/Shared/Card.js");




function CardWrapper(_ref) {
  var cards = _ref.cards,
      emptyComponent = _ref.emptyComponent;
  var listsCard;

  if (cards.length > 0) {
    listsCard = cards.map(function (card) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Card__WEBPACK_IMPORTED_MODULE_2__["default"], {
        key: card.id,
        src: card.src,
        details: card.details,
        abbrev: card.abbrev,
        subject: card.subject,
        deadline: card.deadline,
        group: card.group
      });
    });
  } else if (cards.length === 0) {
    listsCard = emptyComponent;
  } // state buat yang point2 buat meyakinkan di app aja


  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "flex flex-col items-center"
  }, listsCard);
}

CardWrapper.propTypes = {
  cards: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object),
  emptyComponent: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.element
};
CardWrapper.defaultProps = {
  cards: [],
  emptyComponent: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, "Data yang anda cari tidak ditemukan")
};
/* harmony default export */ __webpack_exports__["default"] = (CardWrapper);

/***/ }),

/***/ "./resources/js/Shared/Layout.js":
/*!***************************************!*\
  !*** ./resources/js/Shared/Layout.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @inertiajs/inertia-react */ "./node_modules/@inertiajs/inertia-react/dist/index.js");
/* harmony import */ var _inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _logo_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./logo.svg */ "./resources/js/Shared/logo.svg");
/* harmony import */ var _logo_svg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_logo_svg__WEBPACK_IMPORTED_MODULE_2__);




function Layout(_ref) {
  var children = _ref.children;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "App text-gray-800 min-h-screen flex flex-col justify-between items-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("header", {
    className: "w-full py-4 px-4 lg:px-8 flex items-center justify-between"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_1__["InertiaLink"], {
    href: "/"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: _logo_svg__WEBPACK_IMPORTED_MODULE_2___default.a,
    className: "w-32",
    alt: "logo"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_1__["InertiaLink"], {
    href: "/admin"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "underline text-blue-700"
  }, "admin?"))), children, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("footer", {
    className: "w-full py-4 px-4 lg:px-8 flex items-center justify-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "text-sm text-gray-500"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "text-blue-700"
  }, "<>"), " di Yogyakarta, dengan ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "text-blue-700"
  }, "<3"))));
}

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ }),

/***/ "./resources/js/Shared/SearchBar.js":
/*!******************************************!*\
  !*** ./resources/js/Shared/SearchBar.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);



function SearchBar(_ref) {
  var groupOnChange = _ref.groupOnChange,
      searchBarOnChange = _ref.searchBarOnChange,
      selectedGroup = _ref.selectedGroup;

  function handleSearchBarOnChange(event) {
    searchBarOnChange(event.target.value);
  }

  function handleGroupOnChange(event) {
    groupOnChange(event.target.value);
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "border w-full rounded-lg py-2 px-4 flex flex-col lg:flex-row lg:justify-between items-center lg:mb-0 mb-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "flex items-center flex-1"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "inline-block mr-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
    className: "w-6 h-6 stroke-current text-blue-600",
    fill: "none",
    stroke: "currentColor",
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2",
    d: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
    className: "flex-auto"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    className: "py-4 px-4 w-full",
    type: "text",
    placeholder: "Mau mengerjakan apa hari ini?",
    onChange: handleSearchBarOnChange
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "lg:border-l lg:ml-4 pl-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    htmlFor: "group-select",
    className: "mr-2"
  }, "Kelas:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("select", {
    id: "group-select",
    className: "bg-white text-blue-600 font-semibold underline border p-1 rounded text-center",
    onChange: handleGroupOnChange,
    value: selectedGroup
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
    value: "all"
  }, "Semua"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
    value: "a"
  }, "A"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
    value: "b"
  }, "B"))));
}

SearchBar.propTypes = {
  searchBarOnChange: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  selectedGroup: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  groupOnChange: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (SearchBar);

/***/ }),

/***/ "./resources/js/Shared/logo.svg":
/*!**************************************!*\
  !*** ./resources/js/Shared/logo.svg ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/logo.svg?61b29052ae084ba1a8bfc9e4c5d8a288";

/***/ })

}]);