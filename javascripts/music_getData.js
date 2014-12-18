$(function(){
    function init(){
        var musicdata = 
        {
            result: 0,
            data: {
                album: {
                    ownerId: "1",
                    type: 1,
                    name: "后会无期",
                    author: "朴树",
                    copyright: "ay",
                    note: "第056565",
                    audited: false,
                    id: "album0",
                    createTime: 1418863088131,
                    updateTime: 1418863088131
                },
                trackList: [
                {
                    ownerId: "1",
                    type: 1,
                    audioFile: "res/test.mp3",
                    releaseFile: "res/sound.ogg",
                    name: "平凡之路",
                    lyricFile: "歌词路径0",
                    sourceFile: "0源文件",
                    author: "朴树",
                    copyright: "CopyAllow",
                    duration: 0,
                    note: "sd0",
                    audited: false,
                    id: "0trsdacjk0",
                    createTime: 1418863088147,
                    updateTime: 1418863088147
                },
                {
                    ownerId: "1",
                    type: 1,
                    audioFile: "res/test.mp3",
                    releaseFile: "res/sound.ogg",
                    name: "平凡之路",
                    lyricFile: "歌词路径0",
                    sourceFile: "0源文件",
                    author: "朴树",
                    copyright: "CopyAllow",
                    duration: 0,
                    note: "sd0",
                    audited: false,
                    id: "0trsdacjk0",
                    createTime: 1418863088147,
                    updateTime: 1418863088147
                },
                {
                    ownerId: "1",
                    type: 1,
                    audioFile: "res/test.mp3",
                    releaseFile: "res/sound.ogg",
                    name: "平凡之路",
                    lyricFile: "歌词路径0",
                    sourceFile: "0源文件",
                    author: "朴树",
                    copyright: "CopyAllow",
                    duration: 0,
                    note: "sd0",
                    audited: false,
                    id: "0trsdacjk0",
                    createTime: 1418863088147,
                    updateTime: 1418863088147
                },
                {
                    ownerId: "1",
                    type: 1,
                    audioFile: "res/test.mp3",
                    releaseFile: "res/sound.ogg",
                    name: "平凡之路",
                    lyricFile: "歌词路径0",
                    sourceFile: "0源文件",
                    author: "朴树",
                    copyright: "CopyAllow",
                    duration: 0,
                    note: "sd0",
                    audited: false,
                    id: "0trsdacjk0",
                    createTime: 1418863088147,
                    updateTime: 1418863088147
                },
                {
                    ownerId: "1",
                    type: 1,
                    audioFile: "res/test.mp3",
                    releaseFile: "res/sound.ogg",
                    name: "平凡之路",
                    lyricFile: "歌词路径0",
                    sourceFile: "0源文件",
                    author: "朴树",
                    copyright: "CopyAllow",
                    duration: 0,
                    note: "sd0",
                    audited: false,
                    id: "0trsdacjk0",
                    createTime: 1418863088147,
                    updateTime: 1418863088147
                },
                {
                    ownerId: "1",
                    type: 1,
                    audioFile: "res/test.mp3",
                    releaseFile: "res/sound.ogg",
                    name: "平凡之路",
                    lyricFile: "歌词路径0",
                    sourceFile: "0源文件",
                    author: "朴树",
                    copyright: "CopyAllow",
                    duration: 0,
                    note: "sd0",
                    audited: false,
                    id: "0trsdacjk0",
                    createTime: 1418863088147,
                    updateTime: 1418863088147
                },
                {
                    ownerId: "1",
                    type: 1,
                    audioFile: "res/test.mp3",
                    releaseFile: "res/sound.ogg",
                    name: "平凡之路",
                    lyricFile: "歌词路径0",
                    sourceFile: "0源文件",
                    author: "朴树",
                    copyright: "CopyAllow",
                    duration: 0,
                    note: "sd0",
                    audited: false,
                    id: "0trsdacjk0",
                    createTime: 1418863088147,
                    updateTime: 1418863088147
                },
                {
                    ownerId: "1",
                    type: 1,
                    audioFile: "res/test.mp3",
                    releaseFile: "res/sound.ogg",
                    name: "平凡之路",
                    lyricFile: "歌词路径0",
                    sourceFile: "0源文件",
                    author: "朴树",
                    copyright: "CopyAllow",
                    duration: 0,
                    note: "sd0",
                    audited: false,
                    id: "0trsdacjk0",
                    createTime: 1418863088147,
                    updateTime: 1418863088147
                }
                ]
            }
        }
        /*juicer模板渲染*/
        var html = juicer($("#songList_tpl").html(),{bean:musicdata.data});
                $(".play_container_center_content").html(html);
        console.log(musicdata.data);
    }
    $(this).bind("init",init);
    $(this).trigger('init');
    $(this).trigger('musicPlay');
})