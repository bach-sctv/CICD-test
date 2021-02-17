var jaStrings = {
  //survey templates
  survey: {
    edit: "編集",
    externalHelpLink: "フォームの作成方法を見て学ぶ",
    externalHelpLinkUrl:
      "https://www.youtube.com/channel/UCH2ru9okIcooNZfpIbyq4qQ?view_as=subscriber",
    dropQuestion: "こちらの質問はツールボックスからドロップしてください。",
    addLogicItem: "フォームの流れをカスタマイズするためのルールを作成します。",
    copy: "コピー",
    duplicate: "複製",
    addToToolbox: "ツールボックスに追加",
    deletePanel: "パネルの削除",
    deleteQuestion: "質問の削除",
    convertTo: "変換",
    drag: "ドラッグ要素",
  },
  //questionTypes
  qt: {
    default: "デフォルト",
    checkbox: "チェックボックス",
    comment: "コメント",
    imagepicker: "イメージピッカー",
    ranking: "ランキング",
    image: "画像",
    dropdown: "ドロップダウン",
    file: "ファイル",
    html: "Html",
    matrix: "マトリックス（単一選択)",
    matrixdropdown: "マトリックス（複数選択)",
    matrixdynamic: "マトリックス (動的行)",
    multipletext: "複数のテキスト",
    panel: "パネル",
    paneldynamic: "パネル (動的パネル)",
    radiogroup: "ラジオグループ",
    rating: "レーティング",
    text: "単一入力",
    boolean: "真偽値",
    expression: "式 (読み取り専用)",
    signaturepad: "サインパッド",
    flowpanel: "フローパネル",
  },
  //Strings in Editor
  ed: {
    defaultLocale: "デフォルト ({0})",
    survey: "フォーム",
    settings: "フォーム設定",
    settingsTooltip: "フォームの設定をオープンする",
    //opjectPropertiesHeader: "Advanced",
    //showObjectProperties: "Show Object Properties",
    //hideObjectProperties: "Hide Object Properties",
    showPanel: "パネルを表示",
    hidePanel: "パネルを非表示",
    //editSurvey: "Edit Survey",
    addNewPage: "新規ページの追加",
    moveRight: "右にスクロール",
    moveLeft: "左にスクロール",
    deletePage: "ページ削除",
    editPage: "ページ編集",
    edit: "編集",
    newPageName: "ページ",
    newQuestionName: "質問",
    newPanelName: "パネル",
    newTextItemName: "テキスト",
    testSurvey: "テストフォーム",
    testSurveyAgain: "再度テストフォーム",
    testSurveyWidth: "フォーム幅: ",
    navigateToMsg: "移動する必要があります:",
    logic: "フォームロジック",
    embedSurvey: "フォーム埋め込み",
    translation: "翻訳",
    saveSurvey: "フォーム保存",
    saveSurveyTooltip: "フォーム保存",
    designer: "フォームデザイナー",
    jsonEditor: "JSON エディタ",
    undo: "元に戻す",
    redo: "やり直し",
    undoTooltip: "最後の変更を元に戻す",
    redoTooltip: "変更のやり直し",
    copy: "コピー",
    cut: "切り取る",
    paste: "ペースト",
    copyTooltip: "選択範囲をクリップボードにコピー",
    cutTooltip: "選択範囲をクリップボードに切り取る",
    pasteTooltip: "クリップボードからの貼り付け",
    options: "オプション",
    generateValidJSON: "有効なJSONの生成",
    generateReadableJSON: "読み取り可能なJSONの生成",
    toolbox: "ツールボックス",
    "property-grid": "プロパティー",
    toolboxGeneralCategory: "一般的な",
    //delSelObject: "Delete selected object",
    //editSelObject: "Edit selected object",
    correctJSON: "JSONの修正をお願いします",
    surveyResults: "フォーム結果: ",
    surveyResultsTable: "表として",
    surveyResultsJson: "JSONとして",
    resultsTitle: "質問タイトル",
    resultsName: "質問名",
    resultsValue: "回答値",
    resultsDisplayValue: "表示値",
    modified: "変更",
    saving: "保存中",
    saved: "保存された",
    propertyEditorError: "エラー:",
    saveError: "エラーが発生しました。エディタの内容が保存されていません。",
    translationAddLanguage: "翻訳する言語を選択してください",
    translationShowAllStrings: "すべての文字列を表示",
    translationShowAllPages: "すべてのページを表示",
    translationNoStrings: "翻訳する文字列がありません。フィルターを変更してください。",
    translationExportToSCVButton: "CSVに出力",
    translationImportFromSCVButton: "CSVからインポート",
    translationMergeLocaleWithDefault: "{0}をデフォルトのロケールにマージ",
    bold: "ボールド",
    italic: "イタリック",
    underline: "下線",
    fpAddQuestion: "質問を追加",
    selectPage: "ページを選択",
    chooseElement: "要素を選択してください",
    //completedHtmlOnConditionItemText: "Show if:",
    lg: {
      addNewItem: "", //By default the value is taken from pe.addNew 'Add New', you can set it to 'Add New Rule' for example.
      //Logic tab strings
      page_visibilityName: "Page visibility",
      panel_visibilityName: "Panel visibility",
      panel_enableName: "Panel enable/disable",
      question_visibilityName: "Question visibility",
      question_enableName: "Question enable/disable",
      question_requireName: "Question optional required",
      trigger_completeName: "Complete survey",
      trigger_setvalueName: "Set question value",
      trigger_copyvalueName: "Copy question value",
      trigger_skipName: "Skip to question",
      trigger_runExpressionName: "Run custom expression",
      completedHtmlOnConditionName: "Custom 'Thank you page' text",

      page_visibilityDescription:
        "Make the page visible when the logic expression returns true. Otherwise keep it invisible.",
      panel_visibilityDescription:
        "Make the panel visible when the logic expression returns true. Otherwise keep it invisible.",
      panel_enableDescription:
        "Make the panel, and all elements inside it, enable when the logic expression returns true. Otherwise keep them disabled.",
      question_visibilityDescription:
        "Make the question visible when the logic expression returns true. Otherwise keep it invisible.",
      question_enableDescription:
        "Make the question enable when the logic expression returns true. Otherwise keep it disabled.",
      question_requireDescription:
        "Question becomes required when the logic expression returns true.",
      trigger_completeDescription:
        "When the logic expression returns true then the survey becomes completed and an end-user see the 'Thank you page'.",
      trigger_setvalueDescription:
        "When question values, that are used in the logic expression, are changed and the logic expression returns true, then the value is set to the selected question.",
      trigger_copyvalueDescription:
        "When question values, that are used in the logic expression, are changed and the logic expression returns true, then the value of one selected question is copied to another selected question.",
      trigger_skipDescription:
        "When the logic expression returns true then the survey skip to / focus the selected question.",
      trigger_runExpressionDescription:
        "When the logic expression returns true, then the custom expression is performed. You may optionally set this expression result into the selected question",
      completedHtmlOnConditionDescription:
        "If the logic expression returns true, then the default text for the 'Thank you page' is changed to the given one.",

      itemExpressionText: "When expression: '{0}' returns true:", //{0} - the expression
      page_visibilityText: "Make page {0} visible", //{0} page name
      panel_visibilityText: "Make panel {0} visible", //{0} panel name
      panel_enableText: "Make panel {0} enable", //{0} panel name
      question_visibilityText: "Make question {0} visible", //{0} question name
      question_enableText: "Make question {0} enable", //{0} question name
      question_requireText: "Make question {0} required", //{0} question name
      trigger_completeText: "Survey becomes completed",
      trigger_setvalueText: "Set into question: {0} value {1}", //{0} question name, {1} setValue
      trigger_copyvalueText: "Copy into question: {0} value from question {1}", //{0} and {1} question names
      trigger_skipText: "Survey skip to the question {0}", //{0} question name
      trigger_runExpressionText1: "Run expression: '{0}'", //{0} the expression
      trigger_runExpressionText2: " and set its result into question: {0}", //{0} question name
      completedHtmlOnConditionText:
        "Show custom text for the 'Thank you page'.",

      conditions: "Condition(s)",
      actions: "Action(s)",
      expressionEditorTitle: "Define condition(s)",
      actionsEditorTitle: "Define action(s)",

      deleteAction: "Delete action",
      addNewAction: "Add new action",
      selectedActionCaption: "Select an action to add...",

      expressionInvalid:
        "The logic expression is empty or invalid. Please correct it.",
      noActionError: "Please, add at least one action.",
      actionInvalid: "Please, fix problems in your action(s).",
      expressionSetup: "",
      actionsSetup: "",
    },
  },
  //Property names in table headers
  // pel: {
  //   isRequired: "Required?"
  // },
  //Property Editors
  pe: {
    apply: "反映",
    ok: "OK",
    save: "保存",
    saveTooltip: "保存",
    cancel: "キャンセル",
    reset: "リセット",
    refresh: "リフレッシュ",
    // close: "Close",
    delete: "削除",
    add: "追加",
    addNew: "新規追加",
    addItem: "クリックしてアイテムを追加",
    addOther: "その他",
    addSelectAll: "すべてを選択",
    addNone: "なし",
    removeAll: "すべて削除",
    edit: "編集",
    back: "保存せずに戻る",
    backTooltip: "保存せずに戻る",
    saveAndBack: "保存して戻る",
    saveAndBackTooltip: "保存して戻る",
    // itemValueEdit: "Visible If",
    editChoices: "選択肢の編集",
    showChoices: "選択肢を表示",
    move: "移動",
    empty: "<empty>",
    // notEmpty: "<edit value>",
    fastEntry: "高速入力",
    formEntry: "フォーム入力",
    testService: "サービスのテスト",
    itemSelectorEmpty: "要素を選択してください。",
    conditionActionEmpty: "アクションを選択してください。",
    conditionSelectQuestion: "質問を選択してください",
    conditionSelectPage: "ページを選択してください",
    conditionSelectPanel: "パネルを選択してください",
    conditionValueQuestionTitle: "値を入力/選択してください",
    // conditionHelp:
    //   "Please enter a boolean expression. It should return true to keep the question/page visible. For example: {question1} = 'value1' or ({question2} * {question4}  > 20 and {question3} < 5)",
    expressionHelp:
      "中括弧を使用して質問の値にアクセスすることができます。 {question1} + {question2}, ({price}*{quantity}) * (100 - {discount})となります。iif(), today(), age(), min(), max(), count(), avg() and others、などの関数が使えます。",
    aceEditorHelp: "ctrl+spaceを押すと式の補完ヒントが表示されます。",
    aceEditorRowTitle: "現在の行",
    aceEditorPanelTitle: "現在のパネル",
    showMore: "詳細については、ドキュメントを確認してください。",
    // conditionShowMoreUrl:
    //   "https://surveyjs.io/Documentation/LibraryParameter?id=Question&parameter=visibleIf",
    assistantTitle: "利用可能な質問",
    cellsEmptyRowsColumns: "少なくとも1つの列または行があるはずです。",

    propertyIsEmpty: "値を入力してください",
    propertyIsNoUnique: "ユニークな値を入力してください",
    propertyNameIsNotUnique: "ユニークな名前を入力してください",
    listIsEmpty: "新しいアイテムを追加する",
    expressionIsEmpty: "式が空の場合",
    value: "値",
    text: "テキスト",
    rowid: "行ID",
    imageLink: "画像リンク",
    columnEdit: "コラムの編集: {0}",
    itemEdit: "編集項目: {0}",

    url: "URL",
    path: "パス",
    valueName: "値名",
    titleName: "タイトル名",
    titlePlaceholder: "ここにタイトルを入力してください。",
    surveyTitlePlaceholder: "ここにフォームタイトルを入力してください。",
    pageTitlePlaceholder: "ページタイトルの入力はこちら",
    descriptionPlaceholder: "説明を入力してください",
    surveyDescriptionPlaceholder: "フォームの説明を入力してください。",
    pageDescriptionPlaceholder: "ページの説明を入力してください",

    hasOther: "他の項目を持っている",
    otherText: "その他の項目のテキスト",
    hasNone: "項目を持っていない",
    noneText: "項目テキストなし",
    hasSelectAll: "すべての項目を選択しています。",
    selectAllText: "すべての項目のテキストを選択",
    choicesMin: "自動生成された項目の最小値",
    choicesMax: "自動生成される項目の最大値",
    choicesStep: "自動生成された項目の違い",
    name: "名前",
    title: "タイトル",
    cellType: "セルタイプ",
    colCount: "カラム数",
    choicesOrder: "選択肢の順序を選択します。",
    visible: "目に見えていますか？",
    isRequired: "必須ですか？",
    isAllRowRequired: "すべての行の答えを必須とします。",
    requiredErrorText: "必須のエラーテキスト",
    startWithNewLine: "改行でスタートですか？",
    rows: "行数",
    cols: "カラム数",
    placeHolder: "プレースホルダー",
    showPreview: "プレビュー領域を表示",
    storeDataAsText: "ファイルの内容をテキストとしてJSON結果に格納",
    maxSize: "最大ファイルサイズ",
    imageHeight: "画像の高さ",
    imageWidth: "画像の幅",
    rowCount: "行数",
    columnLayout: "カラムのレイアウト",
    addRowLocation: "行ボタンの位置を追加",
    addRowText: "行ボタンのテキストを追加",
    removeRowText: "行ボタンのテキストを削除",
    rateMin: "最低レート",
    rateMax: "最大レート",
    rateStep: "レートステップ",
    minRateDescription: "最低レートの説明",
    maxRateDescription: "最大レートの説明",
    inputType: "入力タイプ",
    optionsCaption: "オプションのキャプション",
    defaultValue: "デフォルト値",
    cellsDefaultRow: "デフォルトのセルのテキスト",

    surveyEditorTitle: "フォーム設定の編集",
    qEditorTitle: "編集: {0}",

    maxLength: "最大長",

    buildExpression: "ビルド",
    editExpression: "編集",
    and: "And",
    or: "Or",
    remove: "削除",
    addCondition: "条件を追加",

    //survey
    showTitle: "タイトルの表示/非表示",
    expandCollapseTitle: "タイトルの展開/折りたたみ",
    locale: "デフォルト言語",
    simulator: "デバイスの選択",
    landscapeOrientation: "ランドスケープ",
    mode: "モード(編集/読取のみ)",
    clearInvisibleValues: "目に見えない値をクリア",
    cookieName: "クッキー名 (ローカルでの2回のフォーム実行を無効にするため)",
    sendResultOnPageNext: "フォーム結果を次ページに送る",
    storeOthersAsComment: "「その他」の値を別のフィールドに格納する",
    showPageTitles: "ページタイトルを表示",
    showPageNumbers: "ページ番号を表示",
    pagePrevText: "ページの前のボタンテキスト",
    pageNextText: "ページの次のボタンのテキスト",
    completeText: "コンプリートボタンのテキスト",
    previewText: "プレビューボタンのテキスト",
    editText: "編集ボタンのテキスト",
    startSurveyText: "スタートボタンのテキスト",
    showNavigationButtons: "ナビゲーションボタンの表示（デフォルトのナビゲーション）",
    showPrevButton: "前のボタンを表示 (前のページに戻ることができます)",
    firstPageIsStarted: "フォームの最初のページはスタートページです。",
    showCompletedPage: "完成したページを最後に表示する (完成したHtml)",
    goNextPageAutomatic:
      "すべての質問に答えると、自動的に次のページに移動します。",
    showProgressBar: "プログレスバーを表示",
    questionTitleLocation: "質問タイトルの場所",
    requiredText: "問題には記号が必要です。",
    questionStartIndex: "質問開始インデックス (1, 2 または 'A', 'a')",
    showQuestionNumbers: "質問番号を表示する",
    questionTitleTemplate:
      "質問のタイトルテンプレート、デフォルトは: '{no}. {require} {title}'",
    questionErrorLocation: "質問のエラーの場所",
    focusFirstQuestionAutomatic: "ページの変更に最初の質問を集中させる",
    questionsOrder: "ページの要素順",
    maxTimeToFinish: "調査終了までの最大時間",
    maxTimeToFinishPage: "フォームの1ページを終了するまでの最大時間",
    showTimerPanel: "タイマーパネルを表示",
    showTimerPanelMode: "タイマーパネルモードを表示",
    renderMode: "レンダリングモード",
    allowAddPanel: "パネルの追加を許可する",
    allowRemovePanel: "パネルの取り外しを許可する",
    panelAddText: "パネルテキストの追加",
    panelRemoveText: "パネルテキストの削除",
    isSinglePage: "1ページにすべての要素を表示",
    html: "Html",
    expression: "式",

    minValue: "Minimum value",
    maxValue: "Maximum value",
    minLength: "Minimum length",
    allowDigits: "Allow digits",
    minCount: "Minimum count",
    maxCount: "Maximum count",
    regex: "Regular expression",

    totalText: "Total text",
    totalType: "Total type",
    totalExpression: "Total expression",
    totalDisplayStyle: "Total display style",
    totalCurrency: "Total currency",
    totalFormat: "Total format",

    navigateToUrl: "URLに移動します",


    // Header  adorner
    logo: "ロゴ",
    logoPosition: "ロゴの位置",
    logoWidth: "ロゴの幅",
    logoHeight: "ロゴの高さ",
    logoFit: "ロゴフィット",
    addLogo: "ロゴを追加",
    changeLogo: "ロゴの変更",
    logoPositions: {
      none: "ロゴの削除",
      left: "左",
      right: "右",
      top: "上",
      bottom: "下",
    },

    tabs: {
      general: "一般",
      fileOptions: "オプション",
      html: "Htmlエディタ",
      columns: "列",
      rows: "行",
      choices: "選択肢",
      items: "項目",
      visibleIf: "目に見える場合",
      enableIf: "有効にする場合",
      requiredIf: "必須の場合",
      rateValues: "レート値",
      choicesByUrl: "Webからの選択",
      matrixChoices: "デフォルトの選択肢",
      multipleTextItems: "テキスト入力",
      numbering: "ナンバリング",
      validators: "バリデーター",
      navigation: "ナビゲーション",
      question: "質問",
      pages: "ページ",
      completedHtml: "完成したHtml",
      completedHtmlOnCondition: "条件付きで完成したHtml",
      loadingHtml: "Htmlの読み込み",
      timer: "タイマー/クイズ",
      calculatedValues: "計算値",
      triggers: "トリガー",
      templateTitle: "テンプレートタイトル",
      totals: "合計",
      logic: "ロジック",
      layout: "レイアウト",
      data: "データ",
      validation: "バリデーション",
      cells: "セル",
      showOnCompleted: "完成したものを表示",
      logo: "フォームタイトルのロゴ",
      slider: "スライダー",
      others: "その他",
    },
    editProperty: "Edit property '{0}'",
    items: "[ Items: {0} ]",

    enterNewValue: "Please, enter the value.",
    noquestions: "There is no any question in the survey.",
    createtrigger: "Please create a trigger",
    titleKeyboardAdornerTip: "Press enter button to edit",
    keyboardAdornerTip:
      "Press enter button to edit item, press delete button to delete item, press alt plus arrow up or arrow down to move item",
    triggerOn: "On ",
    triggerMakePagesVisible: "Make pages visible:",
    triggerMakeQuestionsVisible: "Make elements visible:",
    triggerCompleteText: "Complete the survey if succeed.",
    triggerNotSet: "The trigger is not set",
    triggerRunIf: "Run if",
    triggerSetToName: "Change value of: ",
    triggerFromName: "Copy value from: ",
    triggerRunExpression: "Run this Expression:",
    triggerSetValue: "to: ",
    triggerGotoName: "Go to the question:",
    triggerIsVariable: "Do not put the variable into the survey result.",
    triggerRunExpressionEmpty: "Please enter a valid expression",

    noFile: "No file choosen",
  },
  //Property values
  pv: {
    true: "true",
    false: "false",
    inherit: "inherit",
    show: "show",
    hide: "hide",
    default: "default",
    initial: "initial",
    random: "random",
    collapsed: "collapsed",
    expanded: "expanded",
    none: "none",
    asc: "ascending",
    desc: "descending",
    indeterminate: "indeterminate",
    decimal: "decimal",
    currency: "currency",
    percent: "percent",
    firstExpanded: "firstExpanded",
    off: "off",
    onPanel: "onPanel",
    onSurvey: "onSurvey",
    list: "list",
    progressTop: "progressTop",
    progressBottom: "progressBottom",
    progressTopBottom: "progressTopBottom",
    horizontal: "horizontal",
    vertical: "vertical",
    top: "top",
    bottom: "bottom",
    topBottom: "top and bottom",
    both: "both",
    left: "left",
    color: "color",
    date: "date",
    datetime: "datetime",
    "datetime-local": "datetime-local",
    email: "email",
    month: "month",
    number: "number",
    password: "password",
    range: "range",
    tel: "tel",
    text: "text",
    time: "time",
    url: "url",
    week: "week",
    hidden: "hidden",
    on: "on",
    onPage: "onPage",
    edit: "edit",
    display: "display",
    onComplete: "onComplete",
    onHidden: "onHidden",
    all: "all",
    page: "page",
    survey: "survey",
    onNextPage: "onNextPage",
    onValueChanged: "onValueChanged",
    singlePage: "single page",
    standard: "standard",
    questionPerPage: "question per page",
    noPreview: "no preview",
    showAllQuestions: "show preview with all questions",
    showAnsweredQuestions: "show preview with answered questions",
  },
  //Operators
  op: {
    empty: "is empty",
    notempty: "is not empty",
    equal: "equals",
    notequal: "not equals",
    contains: "contains",
    notcontains: "not contains",
    anyof: "any of",
    allof: "all of",
    greater: "greater",
    less: "less",
    greaterorequal: "greater or equals",
    lessorequal: "less or equals",
    and: "and",
    or: "or",
  },
  //Embed window
  ew: {
    angular: "Use Angular version",
    jquery: "Use jQuery version",
    knockout: "Use Knockout version",
    react: "Use React version",
    vue: "Use Vue version",
    bootstrap: "For bootstrap framework",
    modern: "Modern theme",
    default: "Default theme",
    orange: "Orange theme",
    darkblue: "Darkblue theme",
    darkrose: "Darkrose theme",
    stone: "Stone theme",
    winter: "Winter theme",
    winterstone: "Winter-Stone theme",
    showOnPage: "Show survey on a page",
    showInWindow: "Show survey in a window",
    loadFromServer: "Load Survey JSON from server",
    titleScript: "Scripts and styles",
    titleHtml: "HTML",
    titleJavaScript: "JavaScript",
  },
  //Test Survey
  ts: {
    selectPage: "Select the page to test it:",
    showInvisibleElements: "Show invisible elements",
  },
  validators: {
    answercountvalidator: "answer count",
    emailvalidator: "e-mail",
    expressionvalidator: "expression",
    numericvalidator: "numeric",
    regexvalidator: "regex",
    textvalidator: "text",
  },
  triggers: {
    completetrigger: "complete survey",
    setvaluetrigger: "set value",
    copyvaluetrigger: "copy value",
    skiptrigger: "skip to question",
    runexpressiontrigger: "run expression",
    visibletrigger: "change visibility (deprecated)",
  },
  pehelp: {
    //expression:
  },
  //Properties
  p: {
    name: "name",
    title: {
      name: "title",
      title: "Leave it empty, if it is the same as 'Name'",
    },

    navigationButtonsVisibility: "navigationButtonsVisibility",
    questionsOrder: "questionsOrder",
    maxTimeToFinish: "maxTimeToFinish",

    visible: "visible",
    visibleIf: "visibleIf",
    questionTitleLocation: "questionTitleLocation",
    description: "記述",
    state: "state",
    isRequired: "isRequired",
    requiredIf: "requiredIf",
    indent: "indent",
    requiredErrorText: "requiredErrorText",
    startWithNewLine: "startWithNewLine",
    innerIndent: "innerIndent",
    page: "page",

    width: "幅",

    commentText: "commentText",
    valueName: "valueName",
    enableIf: "enableIf",
    defaultValue: "defaultValue",
    correctAnswer: "correctAnswer",
    readOnly: "readOnly",
    validators: "validators",
    titleLocation: "titleLocation",

    hasComment: "hasComment",
    hasOther: "hasOther",
    choices: "choices",
    choicesOrder: "choicesOrder",
    choicesByUrl: "choicesByUrl",
    otherText: "otherText",
    otherErrorText: "otherErrorText",
    storeOthersAsComment: "storeOthersAsComment",

    label: "label",
    showTitle: "showTitle",
    valueTrue: "valueTrue",
    valueFalse: "valueFalse",

    cols: "cols",
    rows: "rows",
    placeHolder: "placeHolder",

    optionsCaption: "optionsCaption",

    expression: "expression",
    format: "format",
    displayStyle: "displayStyle",
    currency: "currency",
    useGrouping: "useGrouping",

    showPreview: "showPreview",
    allowMultiple: "allowMultiple",
    imageHeight: "imageHeight",
    imageWidth: "imageWidth",
    storeDataAsText: "storeDataAsText",
    maxSize: "maxSize",

    html: "html",

    columns: "columns",
    cells: "cells",
    isAllRowRequired: "isAllRowRequired",

    horizontalScroll: "horizontalScroll",
    cellType: "cellType",
    columnsLayout: "columnsLayout",
    columnColCount: "columnColCount",
    columnMinWidth: "columnMinWidth",

    rowCount: "rowCount",
    minRowCount: "minRowCount",
    maxRowCount: "maxRowCount",
    keyName: "keyName",
    keyDuplicationError: "keyDuplicationError",
    confirmDelete: "confirmDelete",
    confirmDeleteText: "confirmDeleteText",
    addRowLocation: "addRowLocation",
    addRowText: "addRowText",
    removeRowText: "removeRowText",

    items: "items",
    itemSize: "itemSize",
    colCount: "colCount",

    templateTitle: "templateTitle",
    templateDescription: "templateDescription",
    allowAddPanel: "allowAddPanel",
    allowRemovePanel: "allowRemovePanel",
    panelCount: "panelCount",
    minPanelCount: "minPanelCount",
    maxPanelCount: "maxPanelCount",
    panelsState: "panelsState",
    panelAddText: "panelAddText",
    panelRemoveText: "panelRemoveText",
    panelPrevText: "panelPrevText",
    panelNextText: "panelNextText",
    showQuestionNumbers: "showQuestionNumbers",
    showRangeInProgress: "showRangeInProgress",
    renderMode: "renderMode",
    templateTitleLocation: "templateTitleLocation",

    rateValues: "rateValues",
    rateMin: "rateMin",
    rateMax: "rateMax",
    rateStep: "rateStep",
    minRateDescription: "minRateDescription",
    maxRateDescription: "maxRateDescription",

    inputType: "inputType",
    size: "size",

    locale: "locale",
    focusFirstQuestionAutomatic: "focusFirstQuestionAutomatic",
    completedHtml: "completedHtml",
    completedBeforeHtml: "completedBeforeHtml",
    loadingHtml: "loadingHtml",
    triggers: "triggers",
    cookieName: "cookieName",
    sendResultOnPageNext: "sendResultOnPageNext",
    showNavigationButtons: "showNavigationButtons",
    showPrevButton: "showPrevButton",
    showPageTitles: "showPageTitles",
    showCompletedPage: "showCompletedPage",
    showPageNumbers: "showPageNumbers",
    questionErrorLocation: "questionErrorLocation",
    showProgressBar: "showProgressBar",
    mode: "mode",
    goNextPageAutomatic: "goNextPageAutomatic",
    checkErrorsMode: "checkErrorsMode",
    clearInvisibleValues: "clearInvisibleValues",
    startSurveyText: "startSurveyText",
    pagePrevText: "pagePrevText",
    pageNextText: "pageNextText",
    completeText: "completeText",
    requiredText: "requiredText",
    questionStartIndex: "questionStartIndex",
    questionTitleTemplate: "questionTitleTemplate",
    firstPageIsStarted: "firstPageIsStarted",
    isSinglePage: "isSinglePage",
    maxTimeToFinishPage: "maxTimeToFinishPage",
    showTimerPanel: "showTimerPanel",
    showTimerPanelMode: "showTimerPanelMode",

    defaultPanelValue: "defaultPanelValue",
    defaultRowValue: "defaultRowValue",
    hasNone: "hasNone",
    noneText: "noneText",

    text: "text",
  },
};
/// Color customization
var primaryColor = "#606170",
    secondaryColor = "#1ab394",
    primaryTextColor = "#B2B3C2",
    secondaryTextColor = "#a7a7a7",
    invertedTextColor = "#ffffff",
    primaryHoverColor = "#18a689",
    selectionBorderColor = "#ffffff",
    primaryIconColor = "#B2B3C2",
    primaryBgColor = "#16171E",
    secondaryBgColor = "#16171E",
    primaryBorderColor = "#353646",
    secondaryBorderColor = "#ddd",
    errorColor = "#ed5565";

var defaultThemeColorsEditor = SurveyCreator
    .StylesManager
    .ThemeColors["default"];


defaultThemeColorsEditor["$primary-color"] = primaryColor;
defaultThemeColorsEditor["$secondary-color"] = secondaryColor;
defaultThemeColorsEditor["$primary-text-color"] = primaryTextColor;
defaultThemeColorsEditor["$secondary-text-color"] = secondaryTextColor;
defaultThemeColorsEditor["$inverted-text-color"] = invertedTextColor;
defaultThemeColorsEditor["$primary-hover-color"] = primaryHoverColor;
defaultThemeColorsEditor["$selection-border-color"] = selectionBorderColor;
defaultThemeColorsEditor["$primary-icon-color"] = primaryIconColor;
defaultThemeColorsEditor["$primary-bg-color"] = primaryBgColor;
defaultThemeColorsEditor["$secondary-bg-color"] = secondaryBgColor;
defaultThemeColorsEditor["$primary-border-color"] = primaryBorderColor;
defaultThemeColorsEditor["$secondary-border-color"] = secondaryBorderColor;
defaultThemeColorsEditor["$error-color"] = errorColor;

// console.log(defaultThemeColorsEditor);

var curLocale = SurveyCreator.localization.currentLocale;
// get the current locale strings object
var curStrings = SurveyCreator.localization.getLocale("");
//change the text for visible property in Property Grid
curStrings.survey = jaStrings.survey;
curStrings.ed = jaStrings.ed;
curStrings.qt = jaStrings.qt;
curStrings.pe = jaStrings.pe;
curStrings.ew = jaStrings.ew;
curStrings.ts = jaStrings.ts;
curStrings.validators = jaStrings.validators;
curStrings.pehelp = jaStrings.pehelp;
curStrings.p = jaStrings.p;

// Show Designer, Test Survey, JSON Editor and additionally Logic tabs
var options = {
    pageEditMode: "single",
    showLogicTab: true,
    showJSONEditorTab: true,
    showEmbededSurveyTab : false,
    showTranslationTab : false
};

SurveyCreator.simulatorDevices.iPhone777 = {
  cssPixelRatio: 2,
  ppi: 326,
  width: 750,
  height: 1334,
  frameWidth: 960,
  frameHeight: 1750,
  deviceType: "phone",
  title: "iPhone777",
  cssClass: "svd-simulator-iphone777"
}

delete SurveyCreator.simulatorDevices.msSurface;

//create the SurveyJS Creator and render it in div with id equals to "creatorElement"
var creator = new SurveyCreator.SurveyCreator("creatorElement", options);
//Show toolbox in the right container. It is shown on the left by default
creator.showToolbox = "left";
//Show property grid in the right container, combined with toolbox
creator.showPropertyGrid = "right";
//Make toolbox active by default
creator.rightContainerActiveItem("toolbox");

function getJson () {
  $.ajax({
    url: "./pages.json",
    type: "GET",
    dataType:'json',
    success: function (data) {
      creator.text = JSON.stringify(data);
    },
    error: function (xhr, ajaxOptions, thrownError) {
      alert(thrownError);
    }
  });

}
getJson();

