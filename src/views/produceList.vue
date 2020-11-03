<template>
    <div class="data-view">
        <div class="search-wrapper">
            <input
                type="text"
                v-model="produceName"
                class="searchWords"
                placeholder="请输入项目名称"
            />
            <el-button size="mini" class="search-btn btn" round @click="search"
                >查询</el-button
            >
            <el-button
                size="mini"
                class="new-project btn"
                round
                @click="newProject"
                >新建项目</el-button
            >
        </div>
        <el-table :data="tableData">
            <el-table-column prop="num" label="编号" width="80" align="center">
            </el-table-column>
            <el-table-column
                prop="name"
                label="项目名称"
                width="120"
                align="center"
            >
            </el-table-column>
            <el-table-column prop="num" label="编号" width="120" align="center">
            </el-table-column>
            <el-table-column
                prop="company"
                label="合作公司"
                width="180"
                align="center"
            >
            </el-table-column>
            <el-table-column
                prop="contact"
                label="联系人"
                width="80"
                align="center"
            >
            </el-table-column>
            <el-table-column
                prop="phone"
                label="联系电话"
                width="120"
                align="center"
            >
            </el-table-column>
            <el-table-column
                prop="createTime"
                label="开始时间"
                width="180"
                align="center"
            >
            </el-table-column>
            <el-table-column
                prop="remark"
                label="备注"
                width="130"
                align="center"
            >
            </el-table-column>
            <el-table-column label="操作" width="180" align="center">
                <!-- 如果在el-table-column中使用template, 外部的元素不会编译 -->
                <p>这段文字不会显示</p>
                <template slot-scope="scope">
                    <el-button
                        type="primary"
                        size="mini"
                        @click="modify(scope.row)"
                        >修改</el-button
                    >
                    <el-button
                        type="danger"
                        size="mini"
                        @click="deleteData(scope.row.num)"
                        >删除</el-button
                    >
                </template>
            </el-table-column>
        </el-table>
        <el-dialog
            title="修改信息"
            :center="true"
            :visible="dialogVisible"
            :show-close="false"
            :modal-append-to-body="false"
            width="30%"
            custom-class="my-dialog"
        >   
         <!-- :fullscreen="true"
         :modal-append-to-body="false"
          -->
            <el-form 
                label-position="left" 
                label-width="80px"
                label-suffix=":"
            
            >
                <el-form-item label="项目编号" >
                    <el-input v-model="formData.num"></el-input>
                </el-form-item>
                <el-form-item label="项目名称">
                    <el-input v-model="formData.name"></el-input>
                </el-form-item>
                <el-form-item label="合作公司">
                    <el-input v-model="formData.company"></el-input>
                </el-form-item>
                <el-form-item label="联系人">
                    <el-input v-model="formData.contact"></el-input>
                </el-form-item>
                <el-form-item label="联系电话">
                    <el-input v-model="formData.phone"></el-input>
                </el-form-item>
                <el-form-item label="备注"
                >
                    <el-input v-model="formData.remark"></el-input>
                </el-form-item> 
                <el-form-item>
                    <el-button type="primary" @click="submit('提交成功', 'success')">确 定</el-button>
                    <el-button @click="cancelModify('取消更改', 'info')" style="margin-left:40px">取 消</el-button>
                </el-form-item>
               
            </el-form>
            
        </el-dialog>
        <el-pagination
            :total="total"
            :page-size="pageSize"
            :current-page="currentPage"
            hide-on-single-page
            background
            layout="prev, pager, next,  slot, jumper"
            @size-change="pageSizeChanged"
            @current-change="pageJump"
        >
            <!-- :page-sizes="[6, 12]" 搭配layout: sizes使用 
            Event:
                @next-click="pageJump"
                @prev-click="pageJump"
            
            -->
        </el-pagination>
    </div>
</template>

<script>
import { MessageBox } from "element-ui";
export default {
    data() {
        return {
            produceName: "",
            dialogVisible: false,
            total: 92,
            pageSize: 10,
            currentPage: 1,
        
            tableData: [
                {
                    num: "Xm3413",
                    name: "挖隧道",
                    company: "卓越伙伴科技有限公司",
                    contact: "张三",
                    phone: "17336883688",
                    createTime: new Date(
                        new Date().setDate(2)
                    ).toLocaleDateString(),
                    remark: "测试",
                },
                {
                    num: "Xm3414",
                    name: "挖隧道",
                    company: "卓越伙伴科技有限公司",
                    contact: "张三",
                    phone: "17336883688",
                    createTime: new Date(
                        new Date().setDate(2)
                    ).toLocaleDateString(),
                    remark: "测试",
                },
            ],
            formData: {
                num: null,
                name: null,
                company: null,
                contact: null,
                phone: null,
                remark: null,
            },
        };
    },
    methods: {
        search() {
            console.log("search");
        },
        newProject() {
            console.log("新建项目");
        },
        deleteData(id) {
            // 删除用户
            console.log(`删除id为${id}的项目`);
            this.$confirm("将删除此项目, 是否继续?", "提示", {
                confirmButtonText: "确定",
                cancelButtonText: "取消",
                type: "warning",
            }).then(
                () => {
                    const flag = this.$apis.deleteData(id);
                    if (flag) {
                        this.$msg({
                            type: "success",
                            message: "删除成功",
                        });
                    } else {
                        this.$msg({
                            message: '发生错误',
                            type: 'error',
                        });
                    }
                },
                () => {
                    this.$msg({
                        type: "info",
                        message: "已取消删除",
                    });
                }
            );
        },
        modify(info) {
            this.dialogVisible = true;
            // console.log(info);
            const keys = Object.keys(this.formData);
            keys.forEach((key) => {
                this.formData[key] = info[key];
            });
            console.log(this.formData);
        },
        interaction(message, type='info') {
            this.$msg({
                type,
                message,
            })
        },
        submit(message, type) {
            this.dialogVisible = false;
            this.interaction(message, type);
        },
        cancelModify(message, type) {
            this.dialogVisible = false;
            this.interaction(message, type);
        },
        pageJump(page) {
            console.log(`jump to page ${page}`);
        },
        pageSizeChanged(pageSize) {
            console.log(pageSize);
        }

    },
};
</script>

<style lang="scss">
@import "@/assets/produceList.scss";
@import "@/assets/element/index.scss"
</style>