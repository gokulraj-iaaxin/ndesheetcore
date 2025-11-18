import { Context, FormulaCache } from "../../src";
export function selectionFactory(row, column, row_focus, column_focus) {
    return [
        {
            row,
            column,
            row_focus,
            column_focus,
        },
    ];
}
export function contextFactory({ ...params } = {}) {
    return {
        currentSheetId: "id_1",
        allowEdit: true,
        config: {},
        luckysheet_select_save: [
            {
                row: [0, 0],
                column: [1, 1],
                row_focus: 0,
                column_focus: 0,
            },
        ],
        luckysheetfile: [
            {
                name: "sheet",
                id: "id_1",
                data: [
                    [null, null, null, null],
                    [null, null, null, null],
                    [null, null, null, null],
                    [null, null, null, null],
                ],
                order: 0,
            },
            {
                name: "sheet",
                id: "id_2",
                data: [
                    [null, null, null, null],
                    [null, null, null, null],
                    [null, null, null, null],
                    [null, null, null, null],
                ],
                order: 1,
            },
        ],
        luckysheetCellUpdate: [0, 0],
        visibledatarow: [20, 40, 60, 80, 100],
        visibledatacolumn: [74, 148, 222, 296, 370],
        scrollLeft: 0,
        scrollTop: 0,
        luckysheet_shiftkeydown: false,
        zoomRatio: 1,
        groupValuesRefreshData: [],
        formulaCache: new FormulaCache(),
        defaultCell: {},
        hooks: {},
        ...params,
    };
}
//# sourceMappingURL=context.js.map