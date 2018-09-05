export class PostService{

  posts = [
    {
      title: "Mon premier article",
      content: "Sed (saepe enim redeo ad Scipionem, cuius omnis sermo " +
        "erat de amicitia) querebatur, quod omnibus in rebus homines " +
        "diligentiores essent; capras et oves quot quisque haberet, " +
        "dicere posse, amicos quot haberet, non posse dicere et " +
        "in illis quidem parandis adhibere curam, in amicis eligendis ",
      created_at: new Date("2018/06/08").getTime(),
      loveits: 0
    },
    {
      title: "Mon deuxième article",
      content: "Ultima Syriarum est Palaestina per intervalla magna " +
        "protenta, cultis abundans terris et nitidis et civitates habens " +
        "quasdam egregias, nullam nulli cedentem sed sibi vicissim velut " +
        "ad perpendiculum aemulas: Caesaream",
      created_at: new Date("2018/07/01").getTime(),
      loveits: 0
    },
    {
      title: "Mon troisième article",
      content: "quam ad honorem Octaviani principis exaedificavit Herodes," +
        " et Eleutheropolim et Neapolim itidemque Ascalonem Gazam aevo superiore exstructas",
      created_at: new Date("2018/06/18").getTime(),
      loveits: 0
    },
    {
      title: "Mon quatrième article",
      content: "Et Epigonus quidem amictu tenus philosophus, ut apparuit, " +
        "prece frustra temptata, sulcatis lateribus mortisque metu admoto turpi " +
        "confessione cogitatorum socium, quae nulla erant, fuisse firmavit cum nec " +
        "vidisset quicquam nec audisset ",
      created_at: new Date("2018/02/16").getTime(),
      loveits: 0
    },
  ]

  onLikeOne(index: number){
    if(this.posts[index].loveits != 1){
      this.posts[index].loveits = 1;
    }else{
      this.posts[index].loveits = 0;
    }
  }

  onDislikeOne(index: number){
    if(this.posts[index].loveits != -1){
      this.posts[index].loveits = -1;
    }else{
      this.posts[index].loveits = 0;
    }
  }

}
