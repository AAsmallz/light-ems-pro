<template>
    <div class="log-container">
        <el-row class="form-group">
            <el-col :span="24">
                <div class="title">日志管理</div>
                <template>
                    <el-form class="new-el-form" :inline="true" :model="form" size="small">
                        <el-form-item label="操作类型:">
                            <el-select v-model="form.operationType" style="width: 240px">
                                <el-option v-for="(item, index) in typeList" :key="index" :label="item.itemName" :value="item.itemValue" />
                            </el-select>
                        </el-form-item>
                        <el-form-item label="日志时间:">
                            <el-date-picker
                                v-model="form.logTime"
                                type="date"
                                placeholder="选择日期"
                                format="yyyy-MM-dd"
                                value-format="yyyy-MM-dd"
                                style="width: 240px"
                            ></el-date-picker>
                        </el-form-item>
                        <el-form-item>
                            <el-input v-model="form.userName" placeholder="请输入用户名" style="width: 240px"></el-input>
                        </el-form-item>
                        <el-form-item>
                            <el-button type="primary" icon="el-icon-search" style="margin-left: 10px">查询</el-button>
                            <el-button plain>导出</el-button>
                            <el-button plain @click="onEmptyForm">清空</el-button>
                        </el-form-item>
                    </el-form>
                </template>
            </el-col>
        </el-row>
        <el-row class="table-group">
            <el-col :span="24">
                <el-table :data="dataSource" stripe border size="small" style="width: 100%">
                    <el-table-column type="selection" align="center" width="56"></el-table-column>
                    <el-table-column type="index" align="center" label="序号" width="100"></el-table-column>
                    <el-table-column align="center" prop="timestamp" label="日志时间" width="240">
                        <template v-slot="scope">
                            <div>{{ scope.row.timestamp }}</div>
                        </template>
                    </el-table-column>
                    <el-table-column align="center" prop="user" label="用户名" width="180"></el-table-column>
                    <el-table-column align="center" prop="userName" label="姓名" width="180"></el-table-column>
                    <el-table-column align="center" prop="module" label="操作类型" width="190"></el-table-column>
                    <el-table-column align="center" prop="ip" label="IP地址" width="190"></el-table-column>
                    <el-table-column align="center" prop="operation" label="内容" width="400"></el-table-column>
                </el-table>
            </el-col>
        </el-row>
        <el-row class="table-pagination">
            <el-col :span="24">
                <el-pagination
                    @size-change="onSizeChange"
                    @current-change="onCurrentChange"
                    :current-page="currentPage"
                    :page-size="pageSize"
                    layout="total, prev, pager, next, jumper, sizes"
                    :total="total"
                    background
                ></el-pagination>
            </el-col>
        </el-row>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    name: 'logManage',
    data() {
        return {
            form: {
                //表单
                operationType: '',
                userName: '',
                logTime: ''
            },
            typeList: [], //选择类型列表
            dataSource: [], //表格数据
            pageSize: 10, //每页条数
            currentPage: 1, //当前页数
            total: 400
        };
    },
    methods: {
        // 清空
        onEmptyForm() {
            this.form = {
                operationType: '',
                userName: '',
                logTime: ''
            };
        },
        // 分页事件
        onSizeChange(val) {
            console.log('sizeChange=', val);
            this.pageSize = val;
        },
        onCurrentChange(val) {
            console.log('currentChange=', val);
            this.currentPage = val;
        }
    },
    mounted() {
        axios.post('/api/logManage/list').then((res) => {
            console.log(res);
            if (res.data.code === '200') {
                this.dataSource = res.data.data.list;
            }
        });
    }
};
</script>

<style lang="scss" scoped>
.log-container {
    padding: 20px;
    background-color: #fff;
    .form-group {
        .title {
            font-size: 20px;
            font-weight: bold;
            color: #333333;
            padding-bottom: 10px;
        }
    }
    .table-pagination {
        padding-top: 44px;
        padding-bottom: 84px;
        ::v-deep(.el-pagination) {
            display: flex;
            justify-content: flex-end;
        }
        ::v-deep(.el-pagination__total) {
            flex: 1;
            margin-left: 41px;
        }
        ::v-deep(.el-pagination__jump) {
            margin-right: 24px;
        }
    }
}
</style>
