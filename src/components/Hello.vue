
<template lang="html">


<div class="">



 <section id="showcase">
      <div class="container">
        <h1>GoPomelo Customer Service ChatBot </h1>
        <p>A ChatBot that can help answering your questions.</p>


  <div>
  <b-button href = "https://www.gopomelo.com/contacts/" > Contact us!  </b-button>

  </div>

      </div>


    </section>

        <div class="chat_box">
<div class="chat_head">Bot On Service</div>
<div class="chat_body">
<div class="user"> Customer Service </div>
</div>
</div>
<div class="msg_box" style="right:290px">
<div class="msg_head">GoPomelo
<div class="close" v-on:click='destrory()'>x</div>
</div>



<div class="inside" id='inside'>


  <div class="msg_body" v-for="x in this.conversation.length">
    <div v-if="conversation[x-1].side == 'bot' "  class="msg_a">
      {{conversation[x-1].message}}

    </div>
    <div class="msg_b" v-if="conversation[x-1].side == 'client' ">
      {{conversation[x-1].message}}

    </div>
    <div class="msg_push">

    </div>
  </div>

  </div>
  <div class="msg_footer" >
    <b-form-input placeholder='message' id='in' class="msg_input" v-model='text' v-on:keyup.enter="send(text)">
    </b-form-input></div>

</div>

</div>

</template>

<script>
// import store from '@/store.js'
import PostsApi from '../api/chat.js'
export default {
  data () {
    return {
      text: '',
      conversation: [],
      busy: false
    }
  },
  ready: function () {
    var self = this
    setInterval(function () {
      console.log('updating ticker')
      self.$data.now = Date.now()
    }, 1000)
  },
  methods: {
    destrory () {
      this.conversation = []
      document.getElementById('in').value = ' '
      document.getElementById('in').placeholder = 'message'
    },
    getChat () {
      PostsApi.getChat(_conversation => {
        this.conversation = _conversation
        console.log('this.conversation from watch', this.conversation)
      })
    },
    send (text) {
      this.conversation.push({
        'message': text,
        'side': 'client'
      })

      PostsApi.postChat(text, _response => {
        this.conversation.push({
          'message': _response.data,
          'side': 'bot'
        })
        setTimeout(function () {
          console.log('work')
          console.log('this.conversation', this.conversation)
          var element = document.getElementById('inside')
          console.log('element', element)
          console.log('elementScrollTop', element.scrollTop)
          console.log('elementScrollHeight', element.scrollHeight)
          element.scrollTop = element.scrollHeight
        }, 1000)
      })
      document.getElementById('in').value = ' '
      document.getElementById('in').placeholder = 'message'
    }
  }
}
</script>

<style lang="css">

.inside {
  /*overflow:scroll;*/
  max-height: 500px;
  overflow-y: scroll;
}

.row {
  background-color: #F5F5F5;
}
#center {
  background-color: white;
}
.b-navbar {
  background-color: #FA8072;
}
body{
	background: #259b77;
	margin:0px;
	height:700px;
	font-family: sans-serif;
}

.chat_box{
	position:fixed;
	right:20px;
	bottom:0px;
	width:250px;

}
.chat_body{
	background:white;
	height:200px;
	padding:5px 0px;
}

.chat_head,.msg_head{
	background:#f39c12;
	color:white;
	padding:15px;
	font-weight:bold;
	cursor:pointer;
	border-radius:5px 5px 0px 0px;
}

.msg_box{
	position:fixed;
	bottom:0px;
	width:250px;
  /*height: 300px;*/
	background:white;
	border-radius:5px 5px 0px 0px;
  /*overflow: scroll;*/
}

.msg_head{
	background:#3498db;
}

.msg_body{
	background:white;
	height:auto;
	font-size:12px;
	padding:15px;
	/*overflow-x: hidden;*/
}
.msg_wrap{
  max-height: 500px;
  overflow: scroll;


}
.msg_input{
	width:100%;
	border: 1px solid white;
	border-top:1px solid #DDDDDD;
	-webkit-box-sizing: border-box; /* Safari/Chrome, other WebKit */
	-moz-box-sizing: border-box;    /* Firefox, other Gecko */
	box-sizing: border-box;
}

.close{
	float:right;
	cursor:pointer;
}
.minimize{
	float:right;
	cursor:pointer;
	padding-right:5px;

}

.user{
	position:relative;
	padding:10px 30px;
}
.user:hover{
	background:#f8f8f8;
	cursor:pointer;

}
.user:before{
	content:'';
	position:absolute;
	background:#2ecc71;
	height:10px;
	width:10px;
	left:10px;
	top:15px;
	border-radius:6px;
}

.msg_a{
	display: inline-block;;
	position:relative;
	background:#FDE4CE;
	padding:10px;
	min-height:10px;
	margin-bottom:5px;
	margin-right:10px;
	border-radius:5px;
}
.msg_a:before{
	content:"";
	position:absolute;
	width:0px;
	height:0px;
	border: 10px solid;
	border-color: transparent #FDE4CE transparent transparent;
	left:-20px;
	top:7px;
}
.msg_b{
	background:#EEF2E7;
	padding:10px;
	min-height:15px;
	margin-bottom:5px;
	position:relative;
	margin-left:10px;
	border-radius:5px;
	word-wrap: break-word;
}
.msg_b:after{
	content:"";
	position:absolute;
	width:0px;
	height:0px;
	border: 10px solid;
	border-color: transparent transparent transparent #EEF2E7;
	right:-20px;
	top:7px;
}

#showcase{
  min-height:400px;
  text-align:center;
  color:#e1ffda;
}
#showcase h1{
  margin-top:100px;
  font-size:55px;
  margin-bottom:10px;
}

#showcase p{
  font-size:20px;
}

.btn-secondary {
    color: #292b2c;
    background-color: #fff;
    border-color: #ccc;

}
</style>
