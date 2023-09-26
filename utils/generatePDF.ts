import { generate, Template } from '@pdfme/generator';
import fs from 'fs';
import path from 'path';
import JSZip from 'jszip';
import FileSaver from 'file-saver';


export const generatePDF = async (props: any) => {
    const { tenants, tenantItemText, tenantItemAmounts, getTotalAmounts, date, selectedMonth } = props;

    type Font = {
        [fontName: string]: {
            data: Uint8Array | ArrayBuffer;
            fallback?: boolean;
            subset?: boolean;
        };
    }

    const font: Font = {
        sans: {
            data: await fetch('fonts/Jost-Regular.ttf').then((res) => res.arrayBuffer()),
        },
        sansBold: {
            data: await fetch('fonts/Jost-Bold.ttf').then((res) => res.arrayBuffer()),
        },
        serif: {
            data: await fetch('fonts/PTSerif-Regular.ttf').then((res) => res.arrayBuffer()),
            fallback: true,
        },
        serifBold: {
            data: await fetch('fonts/PTSerif-Bold.ttf').then((res) => res.arrayBuffer()),
        },
        roboto: {
            data: await fetch('fonts/Roboto-Regular.ttf').then((res) => res.arrayBuffer()),
        },
    };

    const template: Template = {
        schemas: [
            {
                title: {
                    type: 'text',
                    position: {
                        x: 45.19,
                        y: 46.56,
                    },
                    width: 125.48,
                    height: 7,
                    alignment: 'center',
                    fontSize: 22,
                    characterSpacing: 0,
                    lineHeight: 1,
                    fontName: 'serif',
                    verticalAlignment: 'middle',
                },
                owner: {
                    type: 'text',
                    position: {
                        x: 71.51,
                        y: 56.2,
                    },
                    width: 72.83,
                    height: 7,
                    alignment: 'center',
                    fontSize: 10,
                    characterSpacing: 0,
                    lineHeight: 1,
                    fontName: 'serif',
                    verticalAlignment: 'middle',
                },
                address1: {
                    type: 'text',
                    position: {
                        x: 90.43,
                        y: 61.56,
                    },
                    width: 35,
                    height: 7,
                    alignment: 'center',
                    fontSize: 10,
                    characterSpacing: 0,
                    lineHeight: 1,
                    fontName: 'serif',
                    verticalAlignment: 'middle',
                },
                address2: {
                    type: 'text',
                    position: {
                        x: 90.43,
                        y: 66.7,
                    },
                    width: 35,
                    height: 7,
                    alignment: 'center',
                    fontSize: 10,
                    characterSpacing: 0,
                    lineHeight: 1,
                    fontName: 'serif',
                    verticalAlignment: 'middle',
                },
                cell: {
                    type: 'text',
                    position: {
                        x: 80.24,
                        y: 71.9,
                    },
                    width: 55.37,
                    height: 7,
                    alignment: 'center',
                    fontSize: 10,
                    characterSpacing: 0,
                    lineHeight: 1,
                    fontName: 'serif',
                    verticalAlignment: 'middle',
                },
                paymentOptions: {
                    type: 'text',
                    position: {
                        x: 33.94,
                        y: 207.96,
                    },
                    width: 147.98,
                    height: 12.51,
                    alignment: 'center',
                    fontSize: 10,
                    characterSpacing: 0,
                    lineHeight: 1.5,
                    fontName: 'serif',
                    verticalAlignment: 'middle',
                },
                mailInstructions: {
                    type: 'text',
                    position: {
                        x: 9.07,
                        y: 222.65,
                    },
                    width: 197.72,
                    height: 31.34,
                    alignment: 'center',
                    fontSize: 12,
                    characterSpacing: 0,
                    lineHeight: 2,
                    fontName: 'serifBold',
                    verticalAlignment: 'middle',
                },
                paymentInstructions: {
                    type: 'text',
                    position: {
                        x: 45.19,
                        y: 256.16,
                    },
                    width: 125.48,
                    height: 13.61,
                    alignment: 'center',
                    fontSize: 10,
                    characterSpacing: 0,
                    lineHeight: 1.5,
                    fontName: 'serif',
                    verticalAlignment: 'middle',
                },
                to: {
                    type: 'text',
                    position: {
                        x: 20,
                        y: 81.43,
                    },
                    width: 100,
                    height: 7,
                    alignment: 'left',
                    fontSize: 10,
                    characterSpacing: 0,
                    lineHeight: 1,
                    fontName: 'serifBold',
                    verticalAlignment: 'middle',
                    backgroundColor: '#ffffff',
                },
                date: {
                    type: 'text',
                    position: {
                        x: 20,
                        y: 95.79,
                    },
                    width: 100,
                    height: 7,
                    alignment: 'left',
                    fontSize: 10,
                    characterSpacing: 0,
                    lineHeight: 1,
                    fontName: 'serifBold',
                },
                re: {
                    type: 'text',
                    position: {
                        x: 20,
                        y: 101.55,
                    },
                    width: 100,
                    height: 7,
                    alignment: 'left',
                    fontSize: 10,
                    characterSpacing: 0,
                    lineHeight: 1,
                    fontName: 'serifBold',
                },
                line1: {
                    type: 'text',
                    position: {
                        x: 20,
                        y: 120.59,
                    },
                    width: 176.54,
                    height: 7,
                    alignment: 'left',
                    fontSize: 13,
                    characterSpacing: 0,
                    lineHeight: 1,
                    fontName: 'roboto',
                },
                line2: {
                    type: 'text',
                    position: {
                        x: 20,
                        y: 132.29,
                    },
                    width: 176.02,
                    height: 7,
                    alignment: 'left',
                    fontSize: 13,
                    characterSpacing: 0,
                    lineHeight: 1,
                    fontName: 'roboto',
                },
                line3: {
                    type: 'text',
                    position: {
                        x: 20,
                        y: 145.52,
                    },
                    width: 176.02,
                    height: 7,
                    alignment: 'left',
                    fontSize: 13,
                    characterSpacing: 0,
                    lineHeight: 1,
                    fontName: 'roboto',
                },
                line4: {
                    type: 'text',
                    position: {
                        x: 20,
                        y: 157.65,
                    },
                    width: 176.02,
                    height: 7,
                    alignment: 'left',
                    fontSize: 13,
                    characterSpacing: 0,
                    lineHeight: 1,
                    fontName: 'roboto',
                },
                line5: {
                    type: 'text',
                    position: {
                        x: 20,
                        y: 170.6,
                    },
                    width: 176.02,
                    height: 7,
                    alignment: 'left',
                    fontSize: 13,
                    characterSpacing: 0,
                    lineHeight: 1,
                    fontName: 'roboto',
                },
                line6: {
                    type: 'text',
                    position: {
                        x: 20,
                        y: 182.73,
                    },
                    width: 176.02,
                    height: 7,
                    alignment: 'left',
                    fontSize: 13,
                    characterSpacing: 0,
                    lineHeight: 1,
                    fontName: 'roboto',
                },
                line7: {
                    type: 'text',
                    position: {
                        x: 20,
                        y: 195.41,
                    },
                    width: 176.02,
                    height: 7,
                    alignment: 'left',
                    fontSize: 13,
                    characterSpacing: 0,
                    lineHeight: 1,
                    fontName: 'roboto',
                },
                item1: {
                    type: 'text',
                    position: {
                        x: 20.03,
                        y: 118.22,
                    },
                    width: 100,
                    height: 7,
                    alignment: 'left',
                    fontSize: 14,
                    characterSpacing: 0,
                    lineHeight: 1,
                    fontName: 'serif',
                    verticalAlignment: 'top',
                },
                item2: {
                    type: 'text',
                    position: {
                        x: 19.89,
                        y: 130.11,
                    },
                    width: 100,
                    height: 7,
                    alignment: 'left',
                    fontSize: 14,
                    characterSpacing: 0,
                    lineHeight: 1,
                    fontName: 'serif',
                },
                item3: {
                    type: 'text',
                    position: {
                        x: 20.11,
                        y: 143.13,
                    },
                    width: 100,
                    height: 7,
                    alignment: 'left',
                    fontSize: 14,
                    characterSpacing: 0,
                    lineHeight: 1,
                    fontName: 'serif',
                },
                item4: {
                    type: 'text',
                    position: {
                        x: 20.04,
                        y: 155.12,
                    },
                    width: 100,
                    height: 7,
                    alignment: 'left',
                    fontSize: 14,
                    characterSpacing: 0,
                    lineHeight: 1,
                    fontName: 'serif',
                },
                item5: {
                    type: 'text',
                    position: {
                        x: 20.09,
                        y: 168.12,
                    },
                    width: 100,
                    height: 7,
                    alignment: 'left',
                    fontSize: 14,
                    characterSpacing: 0,
                    lineHeight: 1,
                    fontName: 'serif',
                },
                item6: {
                    type: 'text',
                    position: {
                        x: 20,
                        y: 180.13,
                    },
                    width: 100,
                    height: 7,
                    alignment: 'left',
                    fontSize: 14,
                    characterSpacing: 0,
                    lineHeight: 1,
                    fontName: 'serif',
                },
                totalText: {
                    type: 'text',
                    position: {
                        x: 140.84,
                        y: 193.09,
                    },
                    width: 20,
                    height: 7,
                    alignment: 'left',
                    fontSize: 14,
                    characterSpacing: 0,
                    lineHeight: 1,
                    fontName: 'serif',
                },
                totalAmount: {
                    type: 'text',
                    position: {
                        x: 160.95,
                        y: 193.09,
                    },
                    width: 35,
                    height: 7,
                    alignment: 'right',
                    fontSize: 14,
                    characterSpacing: 0,
                    lineHeight: 1,
                    fontName: 'serif',
                },
                item1Amount: {
                    type: 'text',
                    position: {
                        x: 161.08,
                        y: 118.11,
                    },
                    width: 35,
                    height: 7,
                    alignment: 'right',
                    fontSize: 14,
                    characterSpacing: 0,
                    lineHeight: 1,
                    fontName: 'serif',
                },
                item2Amount: {
                    type: 'text',
                    position: {
                        x: 161.02,
                        y: 130.08,
                    },
                    width: 35,
                    height: 7,
                    alignment: 'right',
                    fontSize: 14,
                    characterSpacing: 0,
                    lineHeight: 1,
                    fontName: 'serif',
                },
                item3Amount: {
                    type: 'text',
                    position: {
                        x: 161.11,
                        y: 143.08,
                    },
                    width: 35,
                    height: 7,
                    alignment: 'right',
                    fontSize: 14,
                    characterSpacing: 0,
                    lineHeight: 1,
                    fontName: 'serif',
                },
                item4Amount: {
                    type: 'text',
                    position: {
                        x: 161.08,
                        y: 155.13,
                    },
                    width: 35,
                    height: 7,
                    alignment: 'right',
                    fontSize: 14,
                    characterSpacing: 0,
                    lineHeight: 1,
                    fontName: 'serif',
                },
                item5Amount: {
                    type: 'text',
                    position: {
                        x: 161.08,
                        y: 168.12,
                    },
                    width: 35,
                    height: 7,
                    alignment: 'right',
                    fontSize: 14,
                    characterSpacing: 0,
                    lineHeight: 1,
                    fontName: 'serif',
                },
                item6Amount: {
                    type: 'text',
                    position: {
                        x: 161.08,
                        y: 180.13,
                    },
                    width: 35,
                    height: 7,
                    alignment: 'right',
                    fontSize: 14,
                    characterSpacing: 0,
                    lineHeight: 1,
                    fontName: 'serif',
                },
            },
        ],
        basePdf:'data:application/pdf;base64,JVBERi0xLjcNCiW1tbW1DQoxIDAgb2JqDQo8PC9UeXBlL0NhdGFsb2cvUGFnZXMgMiAwIFIvTGFuZyhlbikgL1N0cnVjdFRyZWVSb290IDEyIDAgUi9NYXJrSW5mbzw8L01hcmtlZCB0cnVlPj4vTWV0YWRhdGEgMjMgMCBSL1ZpZXdlclByZWZlcmVuY2VzIDI0IDAgUj4+DQplbmRvYmoNCjIgMCBvYmoNCjw8L1R5cGUvUGFnZXMvQ291bnQgMS9LaWRzWyAzIDAgUl0gPj4NCmVuZG9iag0KMyAwIG9iag0KPDwvVHlwZS9QYWdlL1BhcmVudCAyIDAgUi9SZXNvdXJjZXM8PC9Gb250PDwvRjEgNSAwIFI+Pi9FeHRHU3RhdGU8PC9HUzcgNyAwIFIvR1M4IDggMCBSPj4vWE9iamVjdDw8L0ltYWdlOSA5IDAgUj4+L1Byb2NTZXRbL1BERi9UZXh0L0ltYWdlQi9JbWFnZUMvSW1hZ2VJXSA+Pi9NZWRpYUJveFsgMCAwIDYxMiA3OTJdIC9Db250ZW50cyA0IDAgUi9Hcm91cDw8L1R5cGUvR3JvdXAvUy9UcmFuc3BhcmVuY3kvQ1MvRGV2aWNlUkdCPj4vVGFicy9TL1N0cnVjdFBhcmVudHMgMD4+DQplbmRvYmoNCjQgMCBvYmoNCjw8L0ZpbHRlci9GbGF0ZURlY29kZS9MZW5ndGggMTkzPj4NCnN0cmVhbQ0KeJxVjksLglAQhfcX7n84Sw26L9N7BXHhoygSCo0W0ULCXGmv/w9de0mzOHBmzsx84OW17hFFvEiXGQRf130Lp+mnu9KNYyRZihslgomhQqkgEFjVocK9oWQ/QU9JUlHC5xJSMjFDdaZE2pyAhFZMqBm0CJlvJ53NLUqN9mFvon0583ELSg4O3COqFSW5vbilBHmRAnzzA5QjkzQB0z4C7TEfyjNWjbIyYr2bA8hr8LdwGlCWXd02IbILvr+eZzQ3/w0KZW5kc3RyZWFtDQplbmRvYmoNCjUgMCBvYmoNCjw8L1R5cGUvRm9udC9TdWJ0eXBlL1RydWVUeXBlL05hbWUvRjEvQmFzZUZvbnQvQkNERUVFK0NhbGlicmkvRW5jb2RpbmcvV2luQW5zaUVuY29kaW5nL0ZvbnREZXNjcmlwdG9yIDYgMCBSL0ZpcnN0Q2hh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Mi8yMi1yZGYtc3ludGF4LW5zIyI+CjxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiICB4bWxuczpwZGY9Imh0dHA6Ly9ucy5hZG9iZS5jb20vcGRmLzEuMy8iPgo8cGRmOlByb2R1Y2VyPk1pY3Jvc29mdMKuIFdvcmQgZm9yIE1pY3Jvc29mdCAzNjU8L3BkZjpQcm9kdWNlcj48L3JkZjpEZXNjcmlwdGlvbj4KPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyI+CjxkYzpjcmVhdG9yPjxyZGY6U2VxPjxyZGY6bGk+S3lsZSBTdGV3YXJ0PC9yZGY6bGk+PC9yZGY6U2VxPjwvZGM6Y3JlYXRvcj48L3JkZjpEZXNjcmlwdGlvbj4KPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyI+Cjx4bXA6Q3JlYXRvclRvb2w+TWljcm9zb2Z0wq4gV29yZCBmb3IgTWljcm9zb2Z0IDM2NTwveG1wOkNyZWF0b3JUb29sPjx4bXA6Q3JlYXRlRGF0ZT4yMDIzLTA5LTIxVDE0OjAyOjIwLTA1OjAwPC94bXA6Q3JlYXRlRGF0ZT48eG1wOk1vZGlmeURhdGU+MjAyMy0wOS0yMVQxNDowMjoyMC0wNTowMDwveG1wOk1vZGlmeURhdGU+PC9yZGY6RGVzY3JpcHRpb24+CjxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiICB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyI+Cjx4bXBNTTpEb2N1bWVudElEPnV1aWQ6QkJBQ0JBNTctRjk1QS00MUVFLUFBQTktM0JBMDkyMDVEQjg3PC94bXBNTTpEb2N1bWVudElEPjx4bXBNTTpJbnN0YW5jZUlEPnV1aWQ6QkJBQ0JBNTctRjk1QS00MUVFLUFBQTktM0JBMDkyMDVEQjg3PC94bXBNTTpJbnN0YW5jZUlEPjwvcmRmOkRlc2NyaXB0aW9uPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKPC9yZGY6UkRGPjwveDp4bXBtZXRhPjw/eHBhY2tldCBlbmQ9InciPz4NCmVuZHN0cmVhbQ0KZW5kb2JqDQoyNCAwIG9iag0KPDwvRGlzcGxheURvY1RpdGxlIHRydWU+Pg0KZW5kb2JqDQoyNSAwIG9iag0KPDwvVHlwZS9YUmVmL1NpemUgMjUvV1sgMSA0IDJdIC9Sb290IDEgMCBSL0luZm8gMTEgMCBSL0lEWzw1N0JBQUNCQjVBRjlFRTQxQUFBOTNCQTA5MjA1REI4Nz48NTdCQUFDQkI1QUY5RUU0MUFBQTkzQkEwOTIwNURCODc+XSAvRmlsdGVyL0ZsYXRlRGVjb2RlL0xlbmd0aCA5OD4+DQpzdHJlYW0NCnicY2AAgv//GYGkIAMDiFoMoW6DKcY/YIqZHUKtA1MscyHUJTDFCpGL3QWmpvxnYGACahdmYIZQLBCKFUKxQSgmCAVVyQ7UN00UxmME8qa/BRs2gwNMPYZY+wHoQAB2+w+oDQplbmRzdHJlYW0NCmVuZG9iag0KeHJlZg0KMCAyNg0KMDAwMDAwMDAxMiA2NTUzNSBmDQowMDAwMDAwMDE3IDAwMDAwIG4NCjAwMDAwMDAxNjMgMDAwMDAgbg0KMDAwMDAwMDIxOSAwMDAwMCBuDQowMDAwMDAwNTA4IDAwMDAwIG4NCjAwMDAwMDA3NzUgMDAwMDAgbg0KMDAwMDAwMDk0MiAwMDAwMCBuDQowMDAwMDAxMTgxIDAwMDAwIG4NCjAwMDAwMDEyMzQgMDAwMDAgbg0KMDAwMDAwMTI4NyAwMDAwMCBuDQowMDAwMDIzOTk0IDAwMDAwIG4NCjAwMDAwMzgxNDMgMDAwMDAgbg0KMDAwMDAwMDAxMyA2NTUzNSBmDQowMDAwMDAwMDE0IDY1NTM1IGYNCjAwMDAwMDAwMTUgNjU1MzUgZg0KMDAwMDAwMDAxNiA2NTUzNSBmDQowMDAwMDAwMDE3IDY1NTM1IGYNCjAwMDAwMDAwMTggNjU1MzUgZg0KMDAwMDAwMDAxOSA2NTUzNSBmDQowMDAwMDAwMDIwIDY1NTM1IGYNCjAwMDAwMDAwMDAgNjU1MzUgZg0KMDAwMDAzODg5MyAwMDAwMCBuDQowMDAwMDM4OTIwIDAwMDAwIG4NCjAwMDAwNTgyODYgMDAwMDAgbg0KMDAwMDA2MTQ1NyAwMDAwMCBuDQowMDAwMDYxNTAyIDAwMDAwIG4NCnRyYWlsZXINCjw8L1NpemUgMjYvUm9vdCAxIDAgUi9JbmZvIDExIDAgUi9JRFs8NTdCQUFDQkI1QUY5RUU0MUFBQTkzQkEwOTIwNURCODc+PDU3QkFBQ0JCNUFGOUVFNDFBQUE5M0JBMDkyMDVEQjg3Pl0gPj4NCnN0YXJ0eHJlZg0KNjE4MDANCiUlRU9GDQp4cmVmDQowIDANCnRyYWlsZXINCjw8L1NpemUgMjYvUm9vdCAxIDAgUi9JbmZvIDExIDAgUi9JRFs8NTdCQUFDQkI1QUY5RUU0MUFBQTkzQkEwOTIwNURCODc+PDU3QkFBQ0JCNUFGOUVFNDFBQUE5M0JBMDkyMDVEQjg3Pl0gL1ByZXYgNjE4MDAvWFJlZlN0bSA2MTUwMj4+DQpzdGFydHhyZWYNCjYyNDc3DQolJUVPRg==',
    };

    const inputs = [
        {
            title: 'Statement for Monthly Lease',
            owner: 'Mike Stewart, Owner',
            address1: '216 Arbor Lane',
            address2: 'Haslet, TX 76052',
            cell: 'Cell: 817-903-6579',
            paymentOptions: '**Checks, Money order, Paypal and Zelle accepted only.**\n** No cash **\n',
            mailInstructions: 'Please  Mail Checks To:\n216 Arbor Lane, Haslet, Tx 76052\nOr Put in Drop Box at  Suite 101 and 102\n',
            paymentInstructions: 'Payment is due before the 7th of each month.\nAfter that a late fee will be added.\n',
            to: ``,
            date: ``,
            re: ``,
            line1: `_____________________________________________________________________________________`,
            line2: `_____________________________________________________________________________________`,
            line3: `_____________________________________________________________________________________`,
            line4: `_____________________________________________________________________________________`,
            line5: `_____________________________________________________________________________________`,
            line6: `_____________________________________________________________________________________`,
            line7: `_____________________________________________________________________________________`,
            item1: ``,
            item2: ``,
            item3: ``,
            item4: ``,
            item5: ``,
            item6: ``,
            totalText: `Total: `,
            totalAmount: ``,
            item1Amount: ``,
            item2Amount: ``,
            item3Amount: ``,
            item4Amount: ``,
            item5Amount: ``,
            item6Amount: ``,
        },
    ];

    const zip = new JSZip();

    for (const tenant of tenants) { 
        const month = date.toLocaleString('default', { month: 'long' });
        const day = date.getDate();
        const year = date.getFullYear();
        const formattedDate = `${month} ${day}, ${year}`;

        inputs[0].to = `To: ${tenant.first_name} ${tenant.last_name}`;
        inputs[0].date = `Date: ${formattedDate}`;
        inputs[0].re = `Re: ${selectedMonth} Lease`;
        inputs[0].item1 = `${tenantItemText[`${tenant.id}`].item1}`;
        inputs[0].item2 = `${tenantItemText[`${tenant.id}`].item2}`;
        inputs[0].item3 = `${tenantItemText[`${tenant.id}`].item3}`;
        inputs[0].item4 = `${tenantItemText[`${tenant.id}`].item4}`;
        inputs[0].item5 = `${tenantItemText[`${tenant.id}`].item5}`;
        inputs[0].item6 = `${tenantItemText[`${tenant.id}`].item6}`;
        inputs[0].totalAmount = `$${getTotalAmounts[tenant.id - 1]}.00`;
        inputs[0].item1Amount = tenantItemAmounts[`${tenant.id}`].item1Amount === 0 ? "" : `$${tenantItemAmounts[`${tenant.id}`].item1Amount}.00`;
        inputs[0].item2Amount = tenantItemAmounts[`${tenant.id}`].item2Amount === 0 ? "" : `$${tenantItemAmounts[`${tenant.id}`].item2Amount}.00`;
        inputs[0].item3Amount = tenantItemAmounts[`${tenant.id}`].item3Amount === 0 ? "" : `$${tenantItemAmounts[`${tenant.id}`].item3Amount}.00`;
        inputs[0].item4Amount = tenantItemAmounts[`${tenant.id}`].item4Amount === 0 ? "" : `$${tenantItemAmounts[`${tenant.id}`].item4Amount}.00`;
        inputs[0].item5Amount = tenantItemAmounts[`${tenant.id}`].item5Amount === 0 ? "" : `$${tenantItemAmounts[`${tenant.id}`].item5Amount}.00`;
        inputs[0].item6Amount = tenantItemAmounts[`${tenant.id}`].item6Amount === 0 ? "" : `$${tenantItemAmounts[`${tenant.id}`].item6Amount}.00`;

        const pdf = await generate({ template, inputs, options: { font } });
        const filename = `${tenant.first_name.replace("/", "-")}-${tenant.last_name}-${selectedMonth}-Lease.pdf`;

        zip.file(filename, pdf.buffer);
    }

    zip.generateAsync({ type: 'blob' }).then(function (content) {
        FileSaver.saveAs(content, `${selectedMonth}-Statements.zip`);
    });
};
