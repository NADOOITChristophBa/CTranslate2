Search.setIndex({docnames:["conversion","decoding","environment_variables","faq","generation","guides/fairseq","guides/marian","guides/opennmt_py","guides/opennmt_tf","guides/opus_mt","guides/transformers","hardware_support","index","installation","memory","parallel","performance","python/ctranslate2","python/ctranslate2.AsyncGenerationResult","python/ctranslate2.AsyncTranslationResult","python/ctranslate2.GenerationResult","python/ctranslate2.Generator","python/ctranslate2.TranslationResult","python/ctranslate2.TranslationStats","python/ctranslate2.Translator","python/ctranslate2.contains_model","python/ctranslate2.converters","python/ctranslate2.converters.Converter","python/ctranslate2.converters.FairseqConverter","python/ctranslate2.converters.MarianConverter","python/ctranslate2.converters.OpenAIGPT2Converter","python/ctranslate2.converters.OpenNMTPyConverter","python/ctranslate2.converters.OpenNMTTFConverter","python/ctranslate2.converters.OpenNMTTFConverterV2","python/ctranslate2.converters.OpusMTConverter","python/ctranslate2.converters.TransformersConverter","python/ctranslate2.get_cuda_device_count","python/ctranslate2.get_supported_compute_types","python/ctranslate2.set_random_seed","python/ctranslate2.specs","python/ctranslate2.specs.Activation","python/ctranslate2.specs.EmbeddingsMerge","python/ctranslate2.specs.LayerSpec","python/ctranslate2.specs.ModelSpec","python/ctranslate2.specs.TransformerDecoderModelSpec","python/ctranslate2.specs.TransformerSpec","python/overview","quantization","quickstart","translation","versioning"],envversion:{"sphinx.domains.c":2,"sphinx.domains.changeset":1,"sphinx.domains.citation":1,"sphinx.domains.cpp":5,"sphinx.domains.index":1,"sphinx.domains.javascript":2,"sphinx.domains.math":2,"sphinx.domains.python":3,"sphinx.domains.rst":2,"sphinx.domains.std":2,sphinx:56},filenames:["conversion.md","decoding.md","environment_variables.md","faq.md","generation.md","guides/fairseq.md","guides/marian.md","guides/opennmt_py.md","guides/opennmt_tf.md","guides/opus_mt.md","guides/transformers.md","hardware_support.md","index.rst","installation.md","memory.md","parallel.md","performance.md","python/ctranslate2.rst","python/ctranslate2.AsyncGenerationResult.rst","python/ctranslate2.AsyncTranslationResult.rst","python/ctranslate2.GenerationResult.rst","python/ctranslate2.Generator.rst","python/ctranslate2.TranslationResult.rst","python/ctranslate2.TranslationStats.rst","python/ctranslate2.Translator.rst","python/ctranslate2.contains_model.rst","python/ctranslate2.converters.rst","python/ctranslate2.converters.Converter.rst","python/ctranslate2.converters.FairseqConverter.rst","python/ctranslate2.converters.MarianConverter.rst","python/ctranslate2.converters.OpenAIGPT2Converter.rst","python/ctranslate2.converters.OpenNMTPyConverter.rst","python/ctranslate2.converters.OpenNMTTFConverter.rst","python/ctranslate2.converters.OpenNMTTFConverterV2.rst","python/ctranslate2.converters.OpusMTConverter.rst","python/ctranslate2.converters.TransformersConverter.rst","python/ctranslate2.get_cuda_device_count.rst","python/ctranslate2.get_supported_compute_types.rst","python/ctranslate2.set_random_seed.rst","python/ctranslate2.specs.rst","python/ctranslate2.specs.Activation.rst","python/ctranslate2.specs.EmbeddingsMerge.rst","python/ctranslate2.specs.LayerSpec.rst","python/ctranslate2.specs.ModelSpec.rst","python/ctranslate2.specs.TransformerDecoderModelSpec.rst","python/ctranslate2.specs.TransformerSpec.rst","python/overview.rst","quantization.md","quickstart.md","translation.md","versioning.md"],objects:{"":[[17,0,0,"-","ctranslate2"]],"ctranslate2.AsyncGenerationResult":[[18,2,1,"","__init__"],[18,2,1,"","done"],[18,2,1,"","result"]],"ctranslate2.AsyncTranslationResult":[[19,2,1,"","__init__"],[19,2,1,"","done"],[19,2,1,"","result"]],"ctranslate2.GenerationResult":[[20,2,1,"","__init__"],[20,3,1,"","scores"],[20,3,1,"","sequences"]],"ctranslate2.Generator":[[21,2,1,"","__init__"],[21,3,1,"","device"],[21,3,1,"","device_index"],[21,2,1,"","generate_batch"],[21,3,1,"","num_active_batches"],[21,3,1,"","num_generators"],[21,3,1,"","num_queued_batches"],[21,2,1,"","score_batch"]],"ctranslate2.TranslationResult":[[22,2,1,"","__init__"],[22,3,1,"","attention"],[22,3,1,"","hypotheses"],[22,3,1,"","scores"]],"ctranslate2.TranslationStats":[[23,2,1,"","__init__"],[23,3,1,"","num_examples"],[23,3,1,"","num_tokens"],[23,3,1,"","total_time_in_ms"]],"ctranslate2.Translator":[[24,2,1,"","__init__"],[24,3,1,"","device"],[24,3,1,"","device_index"],[24,2,1,"","load_model"],[24,3,1,"","model_is_loaded"],[24,3,1,"","num_active_batches"],[24,3,1,"","num_queued_batches"],[24,3,1,"","num_translators"],[24,2,1,"","score_batch"],[24,2,1,"","score_file"],[24,2,1,"","translate_batch"],[24,2,1,"","translate_file"],[24,2,1,"","unload_model"]],"ctranslate2.converters":[[27,1,1,"","Converter"],[28,1,1,"","FairseqConverter"],[29,1,1,"","MarianConverter"],[30,1,1,"","OpenAIGPT2Converter"],[31,1,1,"","OpenNMTPyConverter"],[32,1,1,"","OpenNMTTFConverter"],[33,1,1,"","OpenNMTTFConverterV2"],[34,1,1,"","OpusMTConverter"],[35,1,1,"","TransformersConverter"]],"ctranslate2.converters.Converter":[[27,2,1,"","convert"],[27,2,1,"","convert_from_args"],[27,2,1,"","declare_arguments"]],"ctranslate2.converters.FairseqConverter":[[28,2,1,"","__init__"],[28,2,1,"","convert"],[28,2,1,"","convert_from_args"],[28,2,1,"","declare_arguments"]],"ctranslate2.converters.MarianConverter":[[29,2,1,"","__init__"],[29,2,1,"","convert"],[29,2,1,"","convert_from_args"],[29,2,1,"","declare_arguments"]],"ctranslate2.converters.OpenAIGPT2Converter":[[30,2,1,"","__init__"],[30,2,1,"","convert"],[30,2,1,"","convert_from_args"],[30,2,1,"","declare_arguments"]],"ctranslate2.converters.OpenNMTPyConverter":[[31,2,1,"","__init__"],[31,2,1,"","convert"],[31,2,1,"","convert_from_args"],[31,2,1,"","declare_arguments"]],"ctranslate2.converters.OpenNMTTFConverter":[[32,2,1,"","__init__"],[32,2,1,"","convert"],[32,2,1,"","convert_from_args"],[32,2,1,"","declare_arguments"]],"ctranslate2.converters.OpenNMTTFConverterV2":[[33,2,1,"","__init__"],[33,2,1,"","convert"],[33,2,1,"","convert_from_args"],[33,2,1,"","declare_arguments"],[33,2,1,"","from_config"]],"ctranslate2.converters.OpusMTConverter":[[34,2,1,"","__init__"],[34,2,1,"","convert"],[34,2,1,"","convert_from_args"],[34,2,1,"","declare_arguments"]],"ctranslate2.converters.TransformersConverter":[[35,2,1,"","__init__"],[35,2,1,"","convert"],[35,2,1,"","convert_from_args"],[35,2,1,"","declare_arguments"]],"ctranslate2.specs":[[40,1,1,"","Activation"],[41,1,1,"","EmbeddingsMerge"],[42,1,1,"","LayerSpec"],[43,1,1,"","ModelSpec"],[44,1,1,"","TransformerDecoderModelSpec"],[45,1,1,"","TransformerSpec"]],"ctranslate2.specs.Activation":[[40,5,1,"","GELU"],[40,5,1,"","RELU"],[40,5,1,"","SWISH"]],"ctranslate2.specs.EmbeddingsMerge":[[41,5,1,"","ADD"],[41,5,1,"","CONCAT"]],"ctranslate2.specs.LayerSpec":[[42,2,1,"","optimize"],[42,2,1,"","validate"],[42,2,1,"","variables"]],"ctranslate2.specs.ModelSpec":[[43,3,1,"","name"],[43,2,1,"","optimize"],[43,3,1,"","revision"],[43,2,1,"","save"],[43,2,1,"","validate"],[43,2,1,"","variables"]],"ctranslate2.specs.TransformerDecoderModelSpec":[[44,2,1,"","__init__"],[44,3,1,"","name"],[44,2,1,"","optimize"],[44,2,1,"","register_vocabulary"],[44,3,1,"","revision"],[44,2,1,"","save"],[44,2,1,"","validate"],[44,2,1,"","variables"]],"ctranslate2.specs.TransformerSpec":[[45,2,1,"","__init__"],[45,3,1,"","name"],[45,2,1,"","optimize"],[45,2,1,"","register_source_vocabulary"],[45,2,1,"","register_target_vocabulary"],[45,2,1,"","register_vocabulary_mapping"],[45,3,1,"","revision"],[45,2,1,"","save"],[45,2,1,"","validate"],[45,2,1,"","variables"]],ctranslate2:[[18,1,1,"","AsyncGenerationResult"],[19,1,1,"","AsyncTranslationResult"],[20,1,1,"","GenerationResult"],[21,1,1,"","Generator"],[22,1,1,"","TranslationResult"],[23,1,1,"","TranslationStats"],[24,1,1,"","Translator"],[25,4,1,"","contains_model"],[26,0,0,"-","converters"],[36,4,1,"","get_cuda_device_count"],[37,4,1,"","get_supported_compute_types"],[38,4,1,"","set_random_seed"],[39,0,0,"-","specs"]]},objnames:{"0":["py","module","Python module"],"1":["py","class","Python class"],"2":["py","method","Python method"],"3":["py","property","Python property"],"4":["py","function","Python function"],"5":["py","attribute","Python attribute"]},objtypes:{"0":"py:module","1":"py:class","2":"py:method","3":"py:property","4":"py:function","5":"py:attribute"},terms:{"0":[1,2,5,9,10,13,15,16,21,24,37,40,41,47,48,49,50],"02":9,"04":[13,49],"1":[0,1,2,5,10,11,13,15,16,21,24,40,41,45,47,48,49],"10":[1,10,13,47,48],"1000":9,"100mb":47,"1024":[1,21,24],"11":[2,13],"12":[2,47],"127":47,"128k":5,"15":13,"17":13,"182mb":47,"187mb":47,"19":13,"2":[0,1,2,4,13,15,24,30,40,44,45,47,48,49,50],"20":[21,47],"200mb":2,"2016":47,"2017":47,"2018":1,"2019":13,"2020":[9,16],"209715200":2,"256":24,"26":9,"2b":5,"2b_last_checkpoint":5,"3":[2,11,13,15,48],"30":10,"32":24,"32k":47,"364mb":47,"4":[1,2,11,15,48,49],"418m":5,"418m_last_checkpoint":5,"5":[1,5,11,13],"50":21,"512":21,"6":[13,47],"6291455":2,"64":[11,13,47],"7":[2,16,47],"8":2,"95mb":47,"\u00fcbersetzungen":1,"\u00fcbersetzungsmodel":1,"\u00fcbersetzungsmodellen":1,"boolean":2,"case":[0,8,14,15,48],"class":[4,18,19,20,21,22,23,24,27,28,29,30,31,32,33,34,35,40,41,42,43,44,45,49],"const":49,"default":[1,2,5,13,15,21,24,47],"do":[1,47],"enum":[40,41],"erm\u00f6glicht":1,"export":[2,3],"f\u00fcr":1,"final":[0,1,16],"float":[21,24],"function":[0,1,24,25,27,28,29,30,31,32,33,34,35,47],"import":[2,5,9,10,48,49],"int":[21,24,36,37,38,44,45,49],"long":0,"new":32,"return":[1,10,15,18,19,21,24,27,28,29,30,31,32,33,34,35,36,37,42,43,44,45,49],"static":[27,28,29,30,31,32,33,34,35],"true":[1,2,5,15,18,19,21,24,44,45],A:[0,1,20,21,22,23,24,33,42,49],As:47,By:[1,2,13,47],For:[0,1,2,5,10,12,15,16,47],If:[2,8,10,11,13,16,21,24,27,28,29,30,31,32,33,34,35,42,43,44,45,48,49],In:[0,1,8,11,14,15,47,49],Is:5,It:[0,1,10,49],No:[4,5],ON:13,On:[11,15,16,47],The:[0,1,2,3,4,5,6,7,9,10,11,12,13,14,15,21,24,43,44,45,47,49,50],There:[3,5],These:1,To:[14,49],__de__:5,__en__:5,__init__:[18,19,20,21,22,23,24,28,29,30,31,32,33,34,35,44,45],__x__:5,_batch:[15,16],_file:15,aarch64:[11,13,47],ab:47,abc:27,aber:1,abl:3,about:[2,47],abov:[2,13],absolut:47,accelar:3,acceler:[0,1,13,47],accept:[5,47],access:[0,8],accord:15,accumul:47,accuraci:47,activ:[39,44,45,46],ad:[0,3,4,10,21,49],add:[10,13,27,28,29,30,31,32,33,34,35,41],addit:[13,49],address:3,advanc:49,after:[1,21,24,44,45],against:13,agnost:[0,3],al:[1,47],algorithm:1,alia:[42,43,44,45],align:45,alignment_head:45,alignment_lay:45,all:[1,15,28,42,43,44,45,47,49],all_result:1,alloc:2,allow:[1,2,21,24],allow_early_exit:[1,5,21,24],alreadi:[6,10,27,28,29,30,31,32,33,34,35],also:[1,5,7,8,9,21,47],altern:[7,8,21,24],alwai:[1,7,49],amazonaw:48,amd:[11,13],an:[0,1,3,4,7,13,16,21,24,33,42,43,44,45,49],anoth:[0,5,13,47],api:[0,1,2,48,49,50],appear:1,append:10,appl:[13,47],appli:[1,5,9,21,24,42,43,44,45,47],applic:[3,13],approach:3,ar:[0,1,2,4,5,6,7,9,10,11,13,15,16,21,24,27,28,29,30,31,32,33,34,35,42,43,44,45,47,49,50],architectur:[0,2,3,11,13,44,45,47],arg:[18,19,20,22,23,27,28,29,30,31,32,33,34,35],argument:[1,10,27,28,29,30,31,32,33,34,35],argumentpars:[27,28,29,30,31,32,33,34,35],arm64:[11,13,47],around:[1,18,19],articl:2,ask:12,assert:1,assioc:49,associ:49,assumpt:3,async_result:15,asyncgenerationresult:[17,21,46],asynchron:[2,18,19,21,24,49],asynctranslationresult:[17,24,46],attach:24,attent:[22,24,44,45],auch:1,auf:1,ausgerichtet:1,author:47,auto:[16,21,24,47,49],auto_config:33,automat:[2,11,16,21,24,33],autotoken:10,avail:[1,15,18,19,21,24,49],averag:48,avoid:[2,16],avx2:[2,11],avx512:[11,16],avx:[2,11],back:[1,14,21,24],backend:[2,11,13,47],backward:50,bart:[5,10],base:[2,27,47],basic:1,batch:[15,16,21,24,49],batch_gener:15,batch_typ:[16,21,24],bdist_wheel:13,beam:[16,21,24],beam_siz:[1,5,21,24],becaus:[15,32],bedienen:1,bedienung:1,been:2,befor:2,behavior:[1,5,11],below:[1,11,15,16,47],benchmark:47,beschleunigen:1,beschleunigung:1,best:[1,2,11],better:[1,3,15],between:47,bia:1,bias:24,bin:[0,5],bin_growth:2,binari:[0,11,13,47],block:[15,18,19,21,24],bold:13,bool:[18,19,21,24,25,27,28,29,30,31,32,33,34,35,42,43,44,45],bos_token:10,both:[3,11,32,49],bpe:5,broken:0,brows:48,buffer:[2,15],build:0,build_cli:13,build_test:13,built:33,builtin:42,bz2:5,c:[0,3,21,24,50],cach:2,call:[3,15,27,28,29,30,31,32,33,34,35],callabl:24,can:[0,1,2,4,5,7,8,13,14,15,16,33,47,49],candid:[1,21,24,49],cannot:[27,28,29,30,31,32,33,34,35],capabl:[11,16,47],catalog:33,cd:13,chang:[0,1,43,44,45,47],check:[0,25],checkpoint:[8,32,33],checkpoint_path:33,chief:5,children:[42,43,44,45],chunk:16,classmethod:33,client:[13,50],clone:13,cmake:13,cmake_cxx_flag:13,cmake_install_prefix:13,code:[0,2,3,5,48],collect:9,com:[5,13,30,48],combin:1,come:0,comma:2,command:[7,13,27,28,29,30,31,32,33,34,35],common:[1,27,28,29,30,31,32,33,34,35,47],comp:13,compar:[1,47],comparison:47,compat:[9,11,50],compil:[2,11],complet:[1,7],compress:1,comput:[2,3,11,15,16,21,24,37,47],compute_typ:[21,24,47],concat:[41,45],concurr:[15,24],condit:[4,10],confid:1,config:[8,33],configur:[1,2,8,11,13,15,32,33],consid:[15,16,48],constant:[16,21,24],constructor:15,contain:[0,5,9,13,23,25,27,28,29,30,31,32,33,34,35],contains_model:[0,17,46],context:[1,24],control:[1,3,11],conv:6,conveni:9,convers:[3,5,6,7,8,12,27,28,29,30,31,32,33,34,35],convert:[5,6,7,8,9,10,28,29,30,31,32,33,34,35,42,46,47,48,49,50],convert_from_arg:[27,28,29,30,31,32,33,34,35],convert_ids_to_token:10,convert_tokens_to_id:10,core:[0,2,3,16],correspond:[8,10,47],costli:2,could:[0,3],cout:49,cover:[3,50],coverag:24,coverage_penalti:24,cpu:[0,2,3,5,13,14,15,16,21,24,47,48,49],creat:[15,33],critic:2,csc:9,ct2:[5,6,7,8,9,10,47,48],ct2_force_cpu_isa:11,ct2_model:[5,6,7,8,9,10,47],ct2_use_experimental_packed_gemm:16,ct2_use_mkl:11,ct2_verbos:47,ctranslate2:[0,1,2,3,4,5,6,7,8,9,10,12,13,15,18,19,20,21,22,23,24,25,27,28,29,30,31,32,33,34,35,36,37,38,40,41,42,43,44,45,46,47,48,49,50],ctranslate2_root:13,cub:2,cub_cach:2,cubla:3,cuda11:[13,49],cuda:[2,11,13,15,21,24,49],cuda_dynamic_load:13,cuda_malloc_async:2,cudamalloc:2,cumul:1,current:[3,5,10,16,21,24,47],custom:[2,3,13,28,32],da:1,data:[5,15,16,28,49],data_dir:[5,28],dazu:1,de:[1,5,9,10],debug:2,decid:2,declar:[28,42],declare_argu:[27,28,29,30,31,32,33,34,35],decod:[2,4,5,7,9,10,12,21,24,28,44,45,48],decreas:15,defin:[0,5,13,47],degrad:47,del:14,delet:14,demonstr:1,den:1,depend:[3,11,13,15],deprec:[3,32],der:1,describ:[1,15,44,45],descript:[2,12,13],detail:1,detect:47,detoken:[1,24],develop:13,devic:[2,5,15,21,24,36,37,47,48,49],device_index:[15,16,21,24,37],devlin:47,dict:[5,21,24,32,33],dictionari:[5,21,24,28,32,33,42,43,44,45],die:1,dienst:1,dient:1,dies:1,differ:[0,1,4,5,15,45],dimens:45,direct:3,directli:[7,8,13,49],directori:[0,5,8,10,13,21,24,25,27,28,29,30,31,32,33,34,35,43,44,45],disabl:[13,16,20,21,22,24],disable_unk:[21,24],disk:[3,43,44,45,47],dispatch:[2,13],dist:13,distribut:1,diverg:1,dl:5,dnnl:13,docker:49,document:[0,3,8,12,13,47,49],doe:[1,2,5,49],don:8,done:[18,19],dopenmp_runtim:2,doption:13,download:[5,35,48],driver:11,duplic:15,dure:[7,13,21,24,49],dwith_acceler:13,dwith_cuda:13,dwith_dnnl:13,dwith_mkl:13,dwith_openbla:13,dwith_rui:13,dynam:[13,16],e:[2,7,14,28,43,44,45,47],each:[0,1,2,15,20,21,22,24,43,44,45,49],earli:[21,24],easi:0,echo:49,edunov:1,effect:1,effekt:1,effici:[1,2,16,47,50],effizi:1,effizient:1,effizienten:1,effizienter:1,effizienz:1,eigen:3,ein:1,einen:1,einsatzort:1,either:[14,33],element:16,ello:[5,49],emb:3,embed:[0,41,44,45,47],embeddings_merg:45,embeddingsmerg:[39,45,46],empti:[1,20,22,49],en:[5,9,10],en_xx:5,enabl:[2,13,15,16,44,45,47,49],enable_cpu_dispatch:13,enable_profil:13,encod:[0,5,9,10,28,45,48],end:[1,5,21,24,28,48],ende_ctranslate2:[5,9,48,49],endian:0,endl:49,enforc:1,engin:3,english:[9,10,48],enough:24,ensur:47,entrypoint:[4,13,49],environ:[11,12,13,16,47],epoch:48,equal:11,equat:47,erprobung:1,error:[2,49],es:1,especi:3,et:[1,47],etc:3,even:[0,2,3,15],evolv:50,exampl:[0,1,4,5,7,10,13,21,23,24,47,48],exclus:32,execut:[0,2,3,13,16,47,48],exist:[0,3,27,28,29,30,31,32,33,34,35,49],exit:[1,21,24],expect:[0,1,21,49,50],experiment:[1,2],explicitli:[4,13,45],expos:[0,4,47,49],extend:[15,27,29,42],extens:28,extern:3,extract:1,face:[10,35],facebook:10,factor:41,fairseq:[0,1,10,12,28],fairseqconvert:[26,27,46,50],fallback:47,fals:[1,5,21,24,27,28,29,30,31,32,33,34,35,42,43,44,45],fast:[0,2,3],faster:3,fastest:[1,16,47],favor:3,fbaipublicfil:5,featur:[3,12,49],feed:[44,45],fi:9,field:0,file:[0,5,23,24,27,28,29,30,31,32,33,34,35,45,49],fill:0,find:1,finish:[1,21,24],first:[1,21,24,48],fix:[5,28],fixed_dictionari:[5,28],flag:[1,11,13],float16:[21,24,27,28,29,30,31,32,33,34,35,42,43,44,45],folgebeschleunigung:1,follow:[1,2,5,10,13,15,47,49,50],forc:[1,2,27,28,29,30,31,32,33,34,35],format:[0,5,7,24,27,28,29,30,31,32,33,34,35,48,49],formkomprimierung:1,formula:47,forward:[0,1,44,45],fp16:[2,47],fp32:47,framework:[3,10],free:[21,24],frequent:[1,12],from:[0,1,2,3,4,7,8,10,11,15,18,19,20,21,22,23,24,27,28,29,30,31,32,33,34,35,40,41,42,43,44,45,47,49],from_config:33,from_pretrain:10,ft:5,full:[0,15,21,24,47],fulli:[14,24,33],further:16,futur:[21,24],g:[2,7,14,28,43,44,45,47],gear:1,gelu:40,gemm:[2,16],gener:[1,2,10,12,14,15,16,17,20,23,24,31,38,46,49,50],generate_batch:[7,10,15,21],generationopt:21,generationresult:[17,18,21,46],german:[9,10,48],get:47,get_cuda_device_count:[17,46],get_supported_compute_typ:[17,46,47],gil:15,git:13,github:[12,13,30],give:47,given:24,gleichzeitig:1,global:15,goal:3,gpt2:10,gpt2_ct2:10,gpt:[4,30,44],gpu:[2,3,15,16,36,47,49],gram:49,graph:3,greater:[11,13],greedi:[21,24],guarante:[0,24,50],guid:[4,9,11],gz:[5,48],h:[5,8,49],ha:[1,3,15,32,49],half:47,hallo:48,hard:3,hardwar:12,have:[0,2,5,8,13,15,24],head:[44,45],heavi:3,hello:[5,7,9,10,24,48,49],help:[13,47,49],helper:[25,27,28,29,30,31,32,33,34,35],helsinki:10,here:[3,47,49],hidden:45,high:[2,4,49],higher:1,highest:[1,24],how:[0,5,45,49],howev:[0,3,10,47],http:[5,9,13,30,48],hug:[10,35],hypothes:[1,5,9,10,21,22,24,48,49],hypothesi:[1,22],i:[47,49],id:[16,21,24],idea:47,imag:[13,49],immedi:15,impact:[1,2],implement:[0,2,47],impli:[3,47],implicitli:[4,10],improv:[2,15,16],includ:[0,1,4,5,7,12,13,15,21,24,27,28,29,30,31,32,33,34,35,49],increas:[1,15,16,49,50],increment:[0,43,44,45],independ:1,index:45,ineffekt:1,infer:1,inferenzbeschleunigung:1,info:2,inform:[11,47,48],inherit:[18,19,20,21,22,23,24,27,28,29,30,31,32,33,34,35,40,41,42,43,44,45],initi:[21,24,28,29,30,31,32,33,34,35,44,45],input:[1,4,5,10,15,16,21,24,47,49],input_text:48,input_token:48,instal:[5,7,8,10,12,48],install_requir:13,instanc:[1,14,15,21,24,33],instead:[1,13,32,42,43,44,45,47],instruct:[2,11,12,13],int16:[21,24,27,28,29,30,31,32,33,34,35,42,43,44,45],int8:[21,24,27,28,29,30,31,32,33,34,35,42,43,44,45],int8_float16:[21,24,27,28,29,30,31,32,33,34,35,42,43,44,45],integr:[2,3,13],intel:[2,3,11,13,16,47],intenum:[40,41],inter_thread:[2,15,16,21,24],intermedi:0,intern:15,intra_thread:[15,16,21,24],introduc:[2,3],invari:45,iostream:49,isa:[2,13],issu:3,ist:1,its:[13,42,43,44,45,47],j4:13,j:47,join:5,just:1,k:[13,21,24,49],keep:[1,16,24],kei:3,kernel:13,kwarg:[18,19,20,22,23],l:49,lang_code_to_token:10,languag:[4,5,28],languagemodelspec:44,larg:[3,16],larger:16,late:3,latenc:15,later:[14,15],latest:[13,33,49],launch:15,layer:[16,42,43,44,45,47],layernorm_embed:[44,45],layerspec:[0,39,43,46],layout:[43,44,45],ld_library_path:13,leaf:0,learn:[2,3],least:[1,11],left:[1,47],len:1,length:[16,21,24],length_penalti:[21,24],let:1,level:[0,4,15,24,43,49],librari:[2,3,21,24,47],lightweight:3,like:[1,21],limit:[1,15,21,24,32],line:[7,13,24,27,28,29,30,31,32,33,34,35,49],linear:47,link:13,linux:13,list:[1,2,3,5,21,24,29,32,42,43,44,45,49],littl:47,load:[0,5,9,13,14,24,33],load_model:[14,24],log:2,logic:[0,3],low:1,lower:1,lua:3,luatorch:3,m2m100:10,m2m100_418:10,m2m100_418m:10,m2m_100:5,m2m_100_418m_ct2:5,machin:0,maco:13,mai:[15,28],main:[4,47,49],major:0,make:[3,7,10,13,16],manag:[0,12],mani:[3,16,21,24],manylinux2014:13,map:[21,24,27,28,29,30,31,32,33,34,35,42,43,44,45,49],march:13,marian:[0,9,10,12,29],marianconvert:[26,27,34,46,50],match:[5,49],matrix:22,max:47,max_batch_s:[15,16,21,24],max_bin:2,max_cached_byt:2,max_decoding_length:[1,24],max_input_length:[1,21,24],max_length:[10,21],max_queued_batch:[15,21,24],maximum:[1,15,21,24,47],mbart50:5,mbart50_ct2:5,mbart:10,meet:16,memori:[1,2,3,12,15,24,47],merg:[41,45],method:[4,10,14,15,16,49],might:14,militari:5,millisecond:23,min:47,min_bin:2,min_decoding_length:[1,24],min_length:21,minim:5,minimum:[1,16,21,24],mkdir:13,mkl:[2,3,11,13,47],ml50_lang:5,mode:[1,15,47],model:[1,3,4,5,6,7,8,9,10,12,13,14,15,21,24,25,27,28,29,30,31,32,33,34,35,43,44,45,48,49,50],model_dict:5,model_dir:[9,30,34],model_is_load:24,model_name_or_path:35,model_path:[5,6,7,15,21,24,28,29,31,32,47,48],model_spec:[0,32,44,45],modellen:1,modellkompress:1,modellkomprimierung:1,modelspec:[32,39,42,46],modul:[0,2,13,45],more:[0,1,2,3,11,16,21,24,47,48,49],most:[1,8,47],move:[0,3,14,24],mt:[0,10,12,34],multilingu:[5,10,28],multilingual_transform:5,multipl:[0,13,15,16,47],multithread:12,must:0,mutual:32,n:[1,49],name:[0,5,10,21,24,32,33,35,42,43,44,45],namedtupl:23,namespac:[27,28,29,30,31,32,33,34,35],ndarrai:32,need:3,neg:[1,2],nest:0,network:[44,45],next:0,nlp:10,nn:[0,5],no_default_special_token:28,non:[1,2,13,47],none:[2,13,21,24,27,28,29,30,31,32,33,34,35,38,42,43,44,45,47],norm:[44,45],normal:[21,24,44,45],normalize_scor:[1,5,21,24],notimplementederror:[27,28,29,30,31,32,33,34,35],now:3,nowadai:0,npz:[6,29],num_active_batch:[21,24],num_exampl:23,num_gener:21,num_head:[44,45],num_hypothes:[1,21,24],num_lay:[44,45],num_queued_batch:[21,24],num_source_embed:45,num_threads_per_transl:49,num_token:23,num_transl:[24,49],number:[0,1,15,16,21,23,24,36,44,45,49],nvidia:[11,13,16,47],object:[0,9,14,15,18,19,24,42],obtain:5,occur:[1,3],oder:1,off:[2,13],offset:2,older:0,onc:13,one:[0,1,47],onednn:[11,13,47],onli:[3,7,11,47],onmt_release_model:7,open:3,openai:[10,30],openaigpt2convert:[26,27,46,50],openbla:13,openmp:[13,15,21,24],openmp_runtim:13,opennmt:[0,3,12,13,31,32,33,47,48,49],opennmtpyconvert:[26,27,46,50],opennmttfconvert:[26,27,46,50],opennmttfconverterv2:[26,27,32,46,50],oper:0,opt:13,optim:[0,42,43,44,45,47],option:[1,5,8,24,27,28,29,30,31,32,33,34,35,42,43,44,45,47,49,50],opu:[0,10,12,34],opus_model:9,opusmtconvert:[26,29,46,50],order:[2,42,43,44,45],ort:1,os:[2,13],other:[3,8,10,11,47,48,50],out:0,out_typ:[5,9,48],output:[1,5,7,9,10,21,24,27,28,29,30,31,32,33,34,35,43,44,45,49],output_dir:[5,6,7,8,9,10,27,28,29,30,31,32,33,34,35,43,44,45,47,48],output_path:24,output_text:48,output_token:48,outsid:8,over:16,overcom:3,overrid:[2,27,28,29,30,31,32,33,34,35],overview:3,own:[0,2],pack:[2,16],packag:[13,48],page:1,parallel:[2,12,21,24],paramet:[2,5,15,21,24,27,28,29,30,31,32,33,34,35,42,43,44,45],pars:[27,28,29,30,31,32,33,34,35],parser:[27,28,29,30,31,32,33,34,35],particular:11,pass:[8,16,49],path:[5,6,7,10,13,16,21,24,25,27,28,29,30,31,32,33,34,35,45],penal:[21,24],penalti:[21,24],per:[15,21,24,47],perform:[2,11,12,47],physic:16,pin:2,pip:[5,7,8,10,48],place:[1,21,24],platform:[11,47],pleas:32,pool:2,popul:0,posit:[21,24,45],possibl:[0,2,3,15,21,24,27,28,29,30,31,32,33,34,35,42,43,44,45,47],pouta:9,practic:1,pre:[44,45],pre_norm:[44,45],prebuilt:[11,47],precis:47,predict:[16,21,24],prefer:16,prefix:[1,5,24,42,43,44,45],prefix_bias_beta:[1,24],prepend:[42,43,44,45],pretrain:[5,9,10,35,48],previous:[2,21,24],print:[1,5,9,10,15,48,49],probabl:[1,3],process:[15,16,21,23,24],processor:11,produc:0,product:[3,13],profil:13,programm:1,project:[1,2,11,12,50],projekt:1,properti:[20,21,22,23,24,43,44,45],provid:[9,13,14,28,49],pt:[5,7,28,31,47,48],publish:13,pull:13,purpos:14,pwd:49,py:[0,3,12,13,31,47,48],pybind11:13,pybind11_builtin:[18,19,20,21,22,23,24],pybind11_object:[18,19,20,21,22,23,24],pyonmt:48,pypi:13,python:[0,2,12,15,47,48,50],pytorch:[0,5,7,28,31],qualiti:16,quantiz:[12,13,27,28,29,30,31,32,33,34,35,42,43,44,45],queri:47,question:12,queue:[15,21,24],quickli:24,quickstart:[7,12,49],r:13,rais:[27,28,29,30,31,32,33,34,35,42,43,44,45,49],random:[21,24,38],randomli:[1,21,24],rang:[2,47],rare:0,read:0,read_batch_s:24,readi:[18,19,24],readm:47,reason:2,recommend:16,recurs:[13,42,43,44,45],redefin:3,reduc:[3,16,47,49],reduct:16,refer:[12,47],regist:[44,45],register_source_vocabulari:45,register_target_vocabulari:45,register_vocabulari:44,register_vocabulary_map:45,rel:45,releas:[7,14,15],reli:3,relianc:3,relu:[40,44,45],renam:[43,44,45],repetition_penalti:[21,24],replac:[1,24],replace_unknown:24,repositori:[12,13],repres:0,represent:[0,45],request:[21,24],requir:[2,3,4,5,6,7,10,11,13,16,28,42,43,44,45],resolv:33,resourc:14,respect:13,rest:[1,3],restrict:1,result:[1,5,9,10,15,18,19,20,21,22,24,47,48,49],resum:24,retriev:15,return_altern:[1,21,24],return_attent:[22,24],return_scor:[16,20,21,22,24],reus:2,revis:[0,43,44,45],richtet:1,rm:[13,49],ro_ro:5,root:0,round:47,rui:[13,47],run:[4,5,13,15,21,24,47,48,49],rund:1,runtim:[2,13,24,47],runtimeerror:[27,28,29,30,31,32,33,34,35],s3:48,s:[1,2,4,7,10,21,24,48],sacremos:5,safeti:15,sai:[1,5],same:[0,2,7,42,43,44,45,47],sampl:[21,24],sampling_temperatur:[1,21,24],sampling_topk:[1,10,21,24],save:[0,24,27,28,29,30,31,32,33,34,35,43,44,45,47],scale:47,scenario:3,scheme:[27,28,29,30,31,32,33,34,35,42,43,44,45],schlussfolgerung:1,scope:0,score:[1,15,16,20,21,22,24,49],score_batch:[21,24],score_fil:24,score_token_0:24,score_token_1:24,script:[0,7],search:[21,24],section:[0,1,48],see:[0,1,2,3,4,5,7,8,11,12,13,15,47,49],seed:38,seem:25,select:[2,8,10,11,13,16,45,47],self:[18,19,21,24],semant:50,sens:0,sentenc:[1,5,16,24,48],sentencepiec:[5,9,48],sentencepieceprocessor:[5,9,48],separ:[2,9,13,15,47,49],sequenc:[1,5,10,20,21,24],sequencetosequencemodelspec:45,serv:[1,3],servic:1,servieren:1,set:[1,2,5,11,13,15,16,21,24,27,28,29,30,31,32,33,34,35,37,38,42,43,44,45,47,49],set_random_se:[17,46],setup:13,sever:3,shape:[42,43,44,45],share:[3,15,47],should:[0,2,4,5,8,13,15,21,24,33,42,48,49],show:5,sich:1,similar:[0,3,5,47],simpl:0,simpli:[1,7,8,14],simplic:5,sinc:[9,10],singl:[2,5,13,16],size:[3,15,16,21,24,47],size_t:49,skip:16,slot:[21,24],small:10,so:[11,47],softmax:16,solut:5,some:[2,3,5,13,14,15,16,23,42,43,44,45,49],sort:16,sourc:[5,9,10,11,24,28,32,45],source_lang:28,source_path:24,source_tokenize_fn:24,source_vocabulari:0,sp:[5,9,48],space:0,spec:[40,41,42,43,44,45,46],special:[21,28,49],specif:[2,3,15,32,42,43,44,45],specifi:45,speed:[1,2,49],split:[15,16],spm:[5,9,48],src:6,src_1:49,src_2:49,src_lang:10,src_n:49,src_vocab:32,sse:11,standard:1,standardisierten:1,start:[1,4,7,21,28,48],start_token:[10,21],statist:[23,24],std:49,step:[0,3,13],still:15,store:47,str:[5,9,21,24,25,27,28,29,30,31,32,33,34,35,37,42,43,44,45,48],strategi:[1,41],stream:15,string:[1,49],strong:3,stronger:1,structur:[21,24],sub:15,submiss:16,submit:15,submodul:13,successfulli:48,suggest:47,support:[2,3,5,6,7,8,10,12,16,32,37,49,50],sure:[7,10],swish:40,symbol:[1,50],symmetr:47,syria:5,system:[0,13,16,47],t:8,tab:49,tabl:47,take:[1,10],tar:[5,48],target:[1,5,10,13,24,28,32,45,49],target_detokenize_fn:24,target_lang:28,target_path:24,target_prefix:[1,5,10,24],target_tokenize_fn:24,target_vocabulari:0,task:16,techniqu:[1,47],temperatur:[21,24],templat:[0,3],temporarili:14,tensor:16,tensorflow:0,test:13,text:[1,5,12,21,24,48],tf:[0,12,32,33],tgt:6,tgt_1:49,tgt_2:49,tgt_k:49,tgt_vocab:32,than:[0,5,16],thei:[0,9,10,11,21],them:13,thi:[0,1,2,4,5,9,10,11,13,14,15,21,24,27,28,29,30,31,32,33,34,35,42,43,44,45,47,48,49],though:15,thread:[3,15,16,21,24],throughput:[15,16],time:[1,15,23,43,44,45],timestep:1,tip:12,to_cpu:24,token:[1,5,7,16,20,21,23,24,28,32,44,45,49],toolkit:[3,13],top:[0,3,21,24,43],torch:10,total:[15,16,23],total_time_in_m:23,toward:[1,24],trace:2,track:0,tradeoff:2,train:[0,3,5,6,7,8,9,28,29,34,48],transform:[0,3,4,5,6,7,8,9,12,35,44,45,47,48],transformer_align:5,transformerdecodermodelspec:[39,46],transformersconvert:[26,27,46,50],transformerspec:[39,46],translat:[1,2,4,5,9,12,13,14,15,16,17,18,19,21,22,46,47,48,50],translate_batch:[1,5,9,10,15,24,48,49],translate_fil:24,translationopt:[24,50],translationresult:[17,19,24,46,49,50],translationstat:[17,24,46],translator_pool:49,translatorpool:[49,50],tri:47,truncat:[1,21,24],tupl:45,txt:[0,5,13],type:[7,16,21,24,37,40],ubuntu20:[13,49],um:1,un:5,uncondit:[4,10],unconstrain:[21,24],und:1,unifi:0,union:[21,24,32,33,49],unknown:[21,24],unless:[21,24],unlimit:[21,24],unload:[14,24],unload_model:[14,24],unspecifi:1,until:[15,18,19,21,24],unzip:9,us:[0,1,2,4,5,7,9,10,11,13,14,15,16,21,24,32,33,47,48,49],usag:[1,2,3,15,47,49],use_vmap:[24,49],user:28,user_dir:28,usual:[0,2,4,13],v:49,valid:[11,42,43,44,45],valu:[0,1,2,3,13,15,16,21,24,27,28,29,30,31,32,33,34,35,42,43,44,45,47],valueerror:[32,42,43,44,45],variabl:[0,11,12,13,16,32,42,43,44,45,47],vector:[24,49],vendor:2,verbos:2,verifi:[42,43,44,45],version:[0,11,12,13],via:[3,49],visibl:36,vmap:[27,28,29,30,31,32,33,34,35,49],vocab:6,vocab_map:49,vocab_path:[6,29],vocabulari:[0,5,6,16,24,27,28,29,30,31,32,33,34,35,44,45,47],volum:16,von:1,w:47,wa:[20,22],wai:3,wait:[21,24],want:[1,3,8,14],warn:2,we:[1,47],weight:[0,3,27,28,29,30,31,32,33,34,35,42,43,44,45,47],welcom:12,well:49,welt:48,were:[3,16],wget:[5,9,48],what:49,whatev:47,wheel:13,when:[0,1,2,10,13,15,16,21,24,45,47],where:[0,3,5,11,21,24,27,28,29,30,31,32,33,34,35,43,44,45,49],wherea:11,whether:[2,21,24,33],which:[0,2,3,4,5,13,15,24,47,49],whl:13,why:1,window:13,with_acceler:13,with_cuda:13,with_dnnl:13,with_mkl:13,with_openbla:13,with_relative_posit:45,with_rui:13,with_scor:24,with_tokens_scor:24,without:[3,47],wmt:48,wngt:16,work:47,worker:15,workload:15,world:[5,9,10,24,48,49],would:0,wq:47,wrapper:[18,19],write:0,wu:47,x86:[11,13,47],x:5,xf:[5,48],yaml:[8,33],yml:[6,8,29],you:[0,1,2,7,8,10,11,13,14,16,47,48],your:[0,3,13,16,47,48],zip:9,zu:1,zur:1,zwar:1},titles:["Model conversion","Decoding features","Environment variables","Frequently asked questions","Text generation","Fairseq","Marian","OpenNMT-py","OpenNMT-tf","OPUS-MT","Transformers","Hardware support","Index","Installation","Memory management","Multithreading and parallelism","Performance tips","ctranslate2","AsyncGenerationResult","AsyncTranslationResult","GenerationResult","Generator","TranslationResult","TranslationStats","Translator","contains_model","ctranslate2.converters","Converter","FairseqConverter","MarianConverter","OpenAIGPT2Converter","OpenNMTPyConverter","OpenNMTTFConverter","OpenNMTTFConverterV2","OpusMTConverter","TransformersConverter","get_cuda_device_count","get_supported_compute_types","set_random_seed","ctranslate2.specs","Activation","EmbeddingsMerge","LayerSpec","ModelSpec","TransformerDecoderModelSpec","TransformerSpec","Python","Quantization","Quickstart","Text translation","Versioning"],titleterms:{"100":[5,10],"16":47,"2":10,"50":5,"8":47,"do":3,"float":47,"new":0,activ:40,add:0,altern:1,api:12,ar:3,ask:3,asyncgenerationresult:18,asynchron:15,asynctranslationresult:19,autocomplet:1,backward:0,beam:[1,5],bias:1,bit:47,build:13,c:[13,49],client:49,code:13,compat:0,compil:13,constraint:1,contains_model:25,convers:[0,47],convert:[0,26,27],cpu:11,ct2_cuda_alloc:2,ct2_cuda_allow_fp16:2,ct2_cuda_caching_allocator_config:2,ct2_force_cpu_isa:2,ct2_translators_core_offset:2,ct2_use_experimental_packed_gemm:2,ct2_use_mkl:2,ct2_verbos:2,ctranslat:3,ctranslate2:[17,26,39],decod:1,docker:13,doe:3,download:13,dynam:49,embeddingsmerg:41,english:5,environ:2,equival:5,exampl:[9,49],execut:15,factor:49,fairseq:5,fairseqconvert:28,featur:1,float16:47,framework:0,frequent:3,from:[13,14],futur:3,gener:[4,7,21],generationresult:20,german:5,get:12,get_cuda_device_count:36,get_supported_compute_typ:37,gpt:10,gpu:[11,13],greedi:1,guid:12,hardwar:11,how:3,i:3,implement:3,implicit:47,index:12,inform:12,instal:13,instead:3,int16:47,int8:47,int8_float16:47,integ:47,known:3,layerspec:42,length:1,librari:13,limit:3,load:47,m2m:[5,10],manag:14,marian:6,marianconvert:29,marianmt:10,mbart:5,memori:14,mix:47,model:[0,47],modelspec:43,mt:9,multithread:15,openaigpt2convert:30,opennmt:[7,8],opennmtpyconvert:31,opennmttfconvert:32,opennmttfconverterv2:33,option:13,opu:9,opusmtconvert:34,origin:3,other:12,parallel:15,perform:16,pip:13,plan:3,point:47,portabl:0,posit:1,precis:0,project:3,provid:3,py:7,python:[13,14,46,49],pytorch:3,quantiz:[0,47],question:3,quickstart:48,random:1,reduc:0,reduct:49,relat:3,sampl:1,search:[1,5],serial:0,server:3,set_random_se:38,should:3,sourc:[13,49],spec:39,special:[4,10],specif:0,start:12,structur:0,support:[0,11,13,47],tensorflow:3,text:[4,7,49],tf:8,thi:3,tip:16,token:[4,10],transform:10,transformer_lm:7,transformerdecodermodelspec:44,transformersconvert:35,transformerspec:45,translat:[3,10,24,49],translationresult:22,translationstat:23,type:47,us:3,usag:12,variabl:2,version:50,vocabulari:49,what:3,when:3,why:3,wmt16:5,wrapper:13,you:3}})