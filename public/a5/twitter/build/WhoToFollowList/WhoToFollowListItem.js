const WhoToFollowListItem = (who)  => {
    return(`
            <li class="list-group-item text-white">
                    <div class="row align-items-center me-2">
                        <div class="col-2 px-1">
                            <img src=${who.avatarIcon} class="img-thumbnail wd-image-radius" alt="Thumbnail">
                        </div>
                        <div class="col-7 wd-title text-nowrap">
                            <b>${who.userName}</b> <i class="fas fa-check-circle "></i> </br>
                            <div>
                                @${who.handle}
                            </div>
                        </div>
                        <div class="col-3 px-0">
                            <button class="btn btn-primary btn-block rounded-pill">Follow</button>
                        </div>
                    </div>
            </li>        
        `);
}
export default WhoToFollowListItem;