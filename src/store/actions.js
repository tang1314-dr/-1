var action={
    changeAdmin(context,admin){
        context.commit('changeAdmin',admin)
    },
    changeManage(context,manage){
        context.commit('changeManage',manage)
    }
}

export default action;