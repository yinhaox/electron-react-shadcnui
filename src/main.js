import { app, BrowserWindow } from 'electron';
import windowStateKeeper from 'electron-window-state';

const args = process.argv.slice(1);
const serve = args.some(val => val === '--serve');

const createWindow = () => {
    const state = windowStateKeeper({
        defaultWidth: 1280,
        defaultHeight: 800
    });

    const win = new BrowserWindow({
        x: state.x,
        y: state.y,
        minWidth: 1280,
        minHeight: 800,
        resizable: true,
        maximizable: true,
        minimizable: true,
        width: state.width,
        height: state.height,

    })
    win.removeMenu();

    if (serve) {
        win.loadURL('http://localhost:4200');
    } else {
        win.loadURL('index.html');
    }
}

try {
    app.whenReady().then(() => {
        createWindow();

        app.on('window-all-closed', () => {
            if (process.platform !== 'darwin') app.quit()
        })

        app.on('activate', () => {
            if (BrowserWindow.getAllWindows().length === 0) createWindow()
        })
    })
} catch (e) {
    // ignore
}